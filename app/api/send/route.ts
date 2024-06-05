import { generateEmailTemplate } from "@/components/misc/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

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

      // Configurez le transporteur SMTP
      const transporter: Transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: parseInt(process.env.SMTP_PORT || "587", 10),
         secure: false, // true pour le port 465, false pour les autres ports
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
         },
      });

      // Générer le contenu HTML de l'e-mail
      const emailHtml = generateEmailTemplate({
         firstName: firstName,
         lastName: lastName,
         email: email,
         content: content,
      });

      // Configurez l'e-mail
      const mailOptions = {
         from: `${firstName} ${lastName} <${process.env.SMTP_USER}>`,
         to: process.env.SMTP_USER,
         subject: "BlenkDev -> Nouveau Message du Website!",
         html: emailHtml,
      };

      // Envoyez l'e-mail
      const info = await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Email sent", info });
   } catch (error: any) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
