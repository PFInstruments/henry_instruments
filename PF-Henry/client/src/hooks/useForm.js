import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);


  const handleChance = (e) => {
    const{name, value} = e.target;
    setForm({
      ...form,
    [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChance(e);
  };

  const sendEmail = (e) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message was sent, thank you',
      showConfirmButton: false,
      timer: 2000
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0fauzpr', 'template_27hql7l', e.target, 'GlQimBUHT4Tmbhg5O' )
    .then(response => console.log(response))
    .catch(error => console.log(error))
      //message sent
      sendEmail();
      //deja ern blanco el formulario
      e.target.reset();
      setForm(initialForm);

  };

  return {
    form, 
    handleChance, 
    handleBlur, 
    handleSubmit
  };
};
