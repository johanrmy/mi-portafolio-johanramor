"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@components/form/Input";
import TextArea from "@components/form/TextArea";
import FormButton from "@components/form/FormButton";
import Alert from "@components/Alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contactSchema";
import { useRef } from "react";
import { useInView } from "framer-motion";

type InputProps = {
  method?: string;
};

const Form: React.FC<InputProps> = ({ method = "POST" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
    isLoading?: boolean;
  } | null>(null);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    setAlert({
      message: "Enviando mensaje...",
      type: "success",
      isLoading: true,
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setAlert({ message: result.msg, type: "success" });
        reset();
      } else {
        setAlert({ message: "Error al enviar el mensaje", type: "error" });
      }
    } catch (error) {
      setAlert({ message: "Error al enviar el mensaje", type: "error" });
    }
  };

  return (
    <div
      className="w-full"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          isLoading={alert.isLoading}
          onClose={() => setAlert(null)}
        />
      )}
      <form method={method} onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <Input
            label="Tu nombre"
            type="text"
            placeholder="ingresa tu nombre"
            id="fullname"
            error={errors.fullname}
            {...register("fullname")}
          />
          <Input
            label="Tu correo electrónico"
            type="email"
            placeholder="ingresa tu email"
            id="email"
            error={errors.email}
            {...register("email")}
          />
          <TextArea
            label="Tu mensaje"
            id="message"
            error={errors.message}
            register={{ ...register("message") }}
            placeholder="ingresa tu mensaje"
          />
          <FormButton>Enviar</FormButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
