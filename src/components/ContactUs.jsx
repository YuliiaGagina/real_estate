import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contact from "../assets/contact.jpg";
import HText from "./HText";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUs = ({ setSelectedPage }) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-22 pb-16">
      <motion.div>
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500"> Iscriviti ora</span> per
            rimetterti in forma
          </HText>
          <p className="my-5">
            Siamo lieti di accogliere tutti i nuovi clienti e siamo pronti ad
            aiutarvi con tutte le vostre domande riguardanti i nostri servizi.
            Il nostro team di esperti è sempre pronto a fornirvi un servizio di
            alta qualità e a risolvere qualsiasi problema possa sorgere. Non
            esitate a contattarci per qualsiasi richiesta o esigenza: siamo qui
            per aiutarvi a raggiungere i vostri obiettivi e a sentirvi sicuri
            nella vostra scelta della nostra azienda.
          </p>
        </motion.div>
        {/* form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/0a37ea685a0e1d639266f2fc11bc1311"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Nome"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This is field required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is  100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="E-MAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This is field required."}
                  {errors.email.type === "pattern" && "invalid email address."}
                </p>
              )}

              <PhoneInput
                className={inputStyles}
                placeholder="TELEFONO"
                value={phoneNumber}
                onChange={handlePhoneInputChange}
              />
              {errors.phone && (
                <p className="mt-1 text-primary-500">
                  {errors.phone.type === "required" &&
                    "This is field required."}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGGIO"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This is field required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is  2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-primary-300 px-20 py-3 transition duration-500 hover:text-white"
              >
                INVIA
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext rounded-lg overflow-hidden w-full h-6/12 before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="h-3/6" src={contact} alt="contactUsPageGtaphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
