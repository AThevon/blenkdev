import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { generateEmailTemplate } from "@/components/misc/EmailTemplate";

interface EmailBody {
   firstName: string;
   lastName: string;
   email: string;
   content: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
   try {
      const body: EmailBody = await req.json();
      const { firstName, lastName, email, content } = body;

      const mailerSend = new MailerSend({
         apiKey: process.env.MAILERSEND_API_KEY!,
      });

      const emailHtml = generateEmailTemplate({
         firstName,
         lastName,
         email,
         content,
      });

      const sentFrom = new Sender(process.env.MAIL_FROM_ADDRESS!, `${firstName} ${lastName}`);
      const recipients = [new Recipient(process.env.MAIL_TO_ADDRESS!, "BlenkDev")];

      const emailParams = new EmailParams()
         .setFrom(sentFrom)
         .setTo(recipients)
         .setSubject("BlenkDev -> Nouveau Message du Website!")
         .setHtml(emailHtml);

      const response = await mailerSend.email.send(emailParams);

      return NextResponse.json({ message: "Email sent via MailerSend", response });
   } catch (error: any) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
