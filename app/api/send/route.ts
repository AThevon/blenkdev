import { EmailTemplate } from "@/components/misc/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { firstName, lastName, email, content } = body;
      const { data, error } = await resend.emails.send({
         from: `${firstName} ${lastName} <contact@blenkdev.fr>`,
         to: [process.env.EMAIL_TO as string],
         subject: "BlenkDev -> Nouveau Message du Website!",
         react: EmailTemplate({
            firstName: firstName,
            lastName: lastName,
            email: email,
            content: content,
         }),
      } as any);

      if (error) {
         return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
   } catch (error) {
      return Response.json({ error }, { status: 500 });
   }
}
