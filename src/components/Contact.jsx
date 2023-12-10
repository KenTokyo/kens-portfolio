import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // so the site doesnt refresh
    e.preventDefault();

    // to block the next button presses,
    //when user tries sending the form again, wait for it to finish sending,
    //then allow him

    if (form.message.length < 40) {
      alert("Nachricht sollte minimum 40 Zeichen beinhalten!");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_KEY,
        import.meta.env.VITE_APP_TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: "Omed",
          from_email: form.email,
          to_email: "omed.hash@outlook.de",
          message: form.message + "\n" + "message from: " + form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Vielen Dank. Ich werde mich so schnell wie möglich bei Ihnen melden."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oh, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Nehmen Sie Kontakt auf</p>
        <h3 className={styles.sectionHeadText}>Kontakt.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihr Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Wie heißen Sie?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihre Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Wie lautet ihre E-Mail-Adresse??"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihre Nachricht</span>
            <textarea
              rows={7}
              name="message"
              required
              minLength="40"
              value={form.message}
              onChange={handleChange}
              placeholder="Was möchten Sie mir mitteilen?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit
             text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Wird gesendet..." : "Senden"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
