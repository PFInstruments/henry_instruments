import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});


  const handleChance = (e) => {
    const{name, value} = e.target;
    setForm({
      ...form,
    [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChance(e);
    setErrors(validateForm(form));
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
    emailjs.sendForm('service_x6w3gw3', 'template_ypwesae', e.target, 'bqIvzfBDGrlv2Ww24' )
    .then(response => console.log(response))
    .catch(error => console.log(error))
    if(Object.keys(errors).length === 0) {
    sendEmail();
    //deja ern blanco el formulario
    e.target.reset();
    setForm(initialForm);
    } else {
      return;
    }
  };

  return {
    form, 
    errors, 
    handleChance, 
    handleBlur, 
    handleSubmit
  };
};
