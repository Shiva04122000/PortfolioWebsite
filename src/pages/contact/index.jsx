import React from "react";
import styles from "./contact.module.scss";
import { Fragment } from "react";
import Lottie from "lottie-react";
import Contact from "../../assets/svgs/contact1.json";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Index = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, setError] = useState("");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!data.email.match(emailRegex)) {
      errors.email = "Invalid email";
    }

    if (!data.contact) {
      errors.contact = "Contact is required";
    } else if (!data.contact.match(mobileRegex)) {
      errors.contact = "Invalid Contact";
    }

    if (!data.name) {
      errors.name = "Name is required";
    }

    if (!data.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validateForm();
    if (Object.keys(errors).length) {
      setError(errors);
      return;
    }
    setError("");
    axios
      .post("https://getform.io/f/bad428d7-0692-436d-8aa5-8372d4589302", data, {
        headers: { Accept: "application/json" },
      })
      .then(() => {
        setData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
        toast.success(" Thank You. We Will Quickly get in touch with You .");
      })
      .catch(() => toast.error("Oops Something went Wrong !!"));
  };

  return (
    <Fragment>
      <h2 className={styles.title}>Get in Touch</h2>
      <div className={styles.container}>
        <div className={styles.pic}>
          <Lottie animationData={Contact} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.InputDiv}>
            <input
              type="text"
              value={data?.name}
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
          </div>
          <div className={styles.InputDiv}>
            <input
              type="email"
              value={data?.email}
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
            {error.email && <p className={styles.error}>{error.email}</p>}
          </div>
          <div className={styles.InputDiv}>
            <input
              type="text"
              value={data?.contact}
              placeholder="Contact"
              name="contact"
              onChange={handleInputChange}
            />
            {error.contact && <p className={styles.error}>{error.contact}</p>}
          </div>
          <div className={styles.InputDiv}>
            <input
              type="text"
              value={data?.message}
              placeholder="Message"
              name="message"
              onChange={handleInputChange}
            />
            {error.message && <p className={styles.error}>{error.message}</p>}
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Index;
