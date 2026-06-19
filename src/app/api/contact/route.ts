import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: wire up Resend or Nodemailer when ready
  console.log("Contact form:", { name, email, message });

  return Response.json({ ok: true }, { status: 200 });
}
