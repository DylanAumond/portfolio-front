import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { ADD_TOAST } from "../constant/toasts";

export default function ContactForm() {
  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

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
      <h2 className="ml-24">Me contacter !</h2>
      <form
        ref={form}
        className="h-fit grid grid-cols-2 place-content-evenly place-items-center"
        style={{ minHeight: "24rem" }}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_firstName"
          placeholder="prénom"
          className="w-72 lg:w-96 border-b-2 border-black-light"
          required
        />
        <input
          type="text"
          name="user_lastName"
          placeholder="nom"
          className="w-72 lg:w-96  border-b-2 border-black-light"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="exemple@mail.com"
          className="w-72 lg:w-96  border-b-2 border-black-light"
          required
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="+33 x xx xx xx xx"
          className="w-72 lg:w-96  border-b-2 border-black-light"
          required
        />
        <input
          type="text"
          name="object"
          placeholder="sujet de votre message"
          className="w-72 lg:w-96  border-b-2 border-black-light"
          required
        />

        <textarea
          name="message"
          placeholder="écrivez votre message ici !"
          className="w-11/12 border-b-2 border-black-light col-span-2"
          required
        />
        <button
          type="submit"
          value="Send"
          className="bg-gray-900 text-white w-72 lg:w-96"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}
