export const runtime = "nodejs";
export async function GET() {
  return Response.json({
    hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasService: !!process.env.SUPABASE_SERVICE_ROLE,
  });
}
