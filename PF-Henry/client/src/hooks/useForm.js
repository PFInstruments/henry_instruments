import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x6w3gw3', 'template_ypwesae', e.target, 'bqIvzfBDGrlv2Ww24' )
    .then(response => console.log(response))
    .catch(error => console.log(error))
    if(Object.keys(errors).length === 0) {
    alert("Your message was sent, thank you");
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
