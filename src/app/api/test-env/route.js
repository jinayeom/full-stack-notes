// test file to ensure api working 
export async function GET() {
    return Response.json({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || "❌ Missing URL",
      serviceRole: process.env.SUPABASE_SERVICE_ROLE ? "✅ Found" : "❌ Missing",
    });
  }
  