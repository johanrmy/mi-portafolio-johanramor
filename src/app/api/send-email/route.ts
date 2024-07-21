import { NextResponse, NextRequest } from "next/server";
import sg from "@sendgrid/mail";

type StructureMail = {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
};

sg.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const body: ISendEmailValues = await req.json();
    const msgToClient: StructureMail = {
      to: body.email,
      from: process.env.EMAIL_SENDER as string,
      subject: "Mensaje de contacto - ENVIADO",
      html: `¡Hola <strong>${body.fullname}</strong>!, te informo
      que el mensaje para Johan ya fue recibido. Se comunicará
      contigo lo mas rápido posible :) <br/> <strong>Mensaje:</strong>
      ${body.message} <br/> Gracias.`,
    };

    const msgToMe: StructureMail = {
      to: process.env.EMAIL_SENDER as string,
      from: process.env.EMAIL_SENDER as string,
      subject: `Mensaje Recibido - ${body.fullname}`,
      html: `Cliente: ${body.fullname} <br/> Email: ${body.email} <br/> Mensaje: ${body.message}`,
    };

    await sg.send(msgToMe);
    await sg.send(msgToClient);

    return NextResponse.json(
      { msg: "Mensaje enviado con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
