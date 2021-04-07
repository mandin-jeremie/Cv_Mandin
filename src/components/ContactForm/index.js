import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

import "./contactform.css";


const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSubmit = (data) => {
    /*
    setName(data.name);
    setCompany(data.company);
    setPhone(data.phone)
    setEmail(data.email);
    setMessage(data.message);
    */
    console.log(data.name);
    sendFeedBack("service_sgu2wfb", "template_g82flk8", {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      message: data.message,
    }, "user_NAUlDfAAxuo1oQD0xKf9r")
  };

  const sendFeedBack = (serviceId, templateId, variables, userId) => {
    emailjs.send(serviceId, templateId, variables, userId)
      .then((res) => {
        console.log('success !');
        reset();
        /*
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
        */
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer.");
  };




  return (
    <div className="contactFormBloc">
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Nom</label>
        <input className="inputForm" name="name" ref={register({ required: true })} />
        {errors.name && <span className="errorsMessage">Veuillez indiquer votre nom</span>}
        <label>Société</label>
        <input className="inputForm" name="company" ref={register({ required: true })} />
        {errors.company && <span className="errorsMessage">Veuillez indiquer le nom de votre société</span>}
        <label>Téléphone</label>
        <input className="inputForm" name="phone" ref={register({ required: true })} />
        {errors.phone && <span className="errorsMessage">Veuillez indiquer votre numéro de téléphone</span>}
        <label>Email</label>
        <input className="inputForm" type="email" name="email" ref={register({ required: true })} />
        {errors.email && <span className="errorsMessage">Veuillez indiquer votre mail</span>}
        <label>Votre message</label>
        <textarea rows="4" name="message" className="inputFormMessage" ref={register({ required: true })} />
        {errors.message && <span className="errorsMessage">Indiquez votre message</span>}
        <input type="submit" className="inputForm" />
        <div className="form-message"></div>
      </form>
    </div>
  );
};

export default ContactForm;