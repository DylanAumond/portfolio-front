import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { ADD_TOAST } from "../constant/toasts";

export default function ContactForm() {
  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0tduqhg", //"YOUR_SERVICE_ID"
        "template_oyqjfhp", //"YOUR_TEMPLATE_ID"
        form.current,
        "5qMHz2sw3-QCIpvLo" //"YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          dispatch({
            type: ADD_TOAST,
            payload: {
              text: "Mail envoyé !",
              color: "green-600",
              icon: "checked",
            },
          });
        },
        (error) => {
          console.log(error.text);
          dispatch({
            type: ADD_TOAST,
            payload: {
              text: error.text,
              color: "red-600",
              icon: "error",
            },
          });
        }
      );
  };

  return (
    <>
      <h2 className="ml-24 my-6">Me contacter !</h2>
      <form
        ref={form}
        className="h-fit grid grid-cols-1 sm:grid-cols-2 sm:mx-12 my-4 mx-4 gap-4"
        style={{ minHeight: "24rem" }}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_firstName"
          placeholder="prénom"
          className="border-b-2 border-black-light"
          required
        />
        <input
          type="text"
          name="user_lastName"
          placeholder="nom"
          className=" border-b-2 border-black-light"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="exemple@mail.com"
          className="  border-b-2 border-black-light"
          required
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="+33 x xx xx xx xx"
          className="  border-b-2 border-black-light"
          required
        />
        <input
          type="text"
          name="object"
          placeholder="sujet de votre message"
          className="  border-b-2 border-black-light sm:col-span-2"
          required
        />

        <textarea
          name="message"
          placeholder="écrivez votre message ici !"
          className=" border-b-2 border-black-light sm:col-span-2"
          required
        />
        <button
          type="submit"
          value="Send"
          className="bg-gray-900 text-white sm:col-span-2"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}
