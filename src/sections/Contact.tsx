import React from "react";
import Title from "@/components/Title";
import Form from "@components/form/Form";

type Props = {};

const Contact: React.FC = (props: Props) => {
  return (
    <div className="w-full mx-auto my-24 bg-pr-color-500">
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Title id="contacto">Contacto.</Title>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 p-4 mb-8">
              <p className="text-center text-tr-color-500 text-lg whitespace-normal">
                Si tienes alguna pregunta o quieres saber más sobre mis
                proyectos, no dudes en ponerte en contacto conmigo.
              </p>
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 2xl:col-span-4 2xl:col-start-5">
              <div className="px-8 sm:px-10 lg:p-0">
                <Form method="POST" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
