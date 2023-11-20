import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const name = formRef.current["name"].value;
    const email = formRef.current["email"].value;
    const subject = formRef.current["subject"].value;
    const message = formRef.current["message"].value;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all the details.");
      return;
    }

    emailjs
      .sendForm(
        "service_q10btoa",
        "template_24u1sfu",
        formRef.current,
        "QnD2SWJ6bgoMHYzXQ"
      )
      .then(
        (result) => {
          setSuccess(true);
          toast.success("Submitted Successfully");
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          toast.error("Error Occurred");
        }
      );
  };

  return (
    <div className="h-full bg-primary/60">
      <ToastContainer
        position="bottom-left"
        toastStyle={{ borderRadius: "0.5rem" }}
      />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-left mb-1 mt-8"
          >
            Feel Free to Reach
            <br /> <span className="text-accent">Out to Me.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-left mb-3 "
          >
            Connect with me For Collaboration or a<br />
            Friendly Hello !
          </motion.p>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto z-30"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
              ></input>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input"
              ></input>
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
            ></input>
            <textarea
              type="text"
              placeholder="message"
              name="message"
              className="textarea "
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover::opacity-0 transition-all duration-500">
                Submit
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
