// src/app/api/suggestions/route.js
export const runtime = "nodejs";        // ensure Node runtime so server secrets are available
export const dynamic = "force-dynamic"; // avoid caching

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Guard: fail fast if envs are missing
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE;
if (!url || !serviceKey) {
  throw new Error(
    "Missing env: NEXT_PUBLIC_SUPABASE_URL and/or SUPABASE_SERVICE_ROLE. " +
    "Set them in .env.local for dev and in Vercel → Project → Settings → Environment Variables."
  );
}

// Use the service role (bypasses RLS). NEVER expose this on the client.
const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

// simple validation
function validate(body) {
  const e = {};
  if (!body?.title?.trim()) e.title = "Title required";
  if (!body?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) e.email = "Valid email required";
  if (!["FEATURE","EDIT","OTHER"].includes(body?.type)) e.type = "Invalid type";
  const len = body?.message?.trim()?.length ?? 0;
  if (len < 10) e.message = "Min 10 chars";
  if (len > 300) e.message = "Max 300 chars";
  return e;
}

export async function GET() {
  const { data, error } = await supabase
    .from("suggestions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ ok:false, error: error.message }, { status:500 });
  return NextResponse.json({ ok:true, rows: data });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const errors = validate(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ ok:false, errors }, { status:400 });
    }
    const { error } = await supabase.from("suggestions").insert({
      title: body.title.trim(),
      email: body.email.trim(),
      type: body.type,
      message: body.message.trim(),
    });
    if (error) return NextResponse.json({ ok:false, error: error.message }, { status:400 });
    return NextResponse.json({ ok:true });
  } catch (e) {
    return NextResponse.json({ ok:false, error:"Invalid JSON" }, { status:400 });
  }
}
