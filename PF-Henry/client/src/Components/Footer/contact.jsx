import React from "react";
import Carousel from "../Carousel/Carousel";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({});


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target]: e.target.value,
    });
  };

  function sendMail(e) {
    e.preventDefault();
    emailjs.sendForm('service_x6w3gw3', 'template_ypwesae', e.target, 'bqIvzfBDGrlv2Ww24')
      .then(response => console.log(response))
      .catch(error => console.log(error))
    alert("Your message was sent, thank you");
    e.target.reset();
  }

  return (
    <>
      <Carousel />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact Form</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">

                      </div>
                      <form method="POST" onSubmit={sendMail} id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">Full Name</label>
                              <input type="text" className="form-control" name="user_name" id="name" placeholder="Name" value={form.user_nombre} onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" value={form.user_email} onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">Message</label>
                              <textarea name="user_message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" value={form.user_message} onChange={handleChange}></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value="Send Message" className="btn btn-primary" />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="col-lg-4 d-none d-lg-flex">
                      <div className="map-container-2 w-100 mb-4 mb-lg-0">
                        <iframe
                          title="mapa"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52594.163713561386!2d-58.546835492909594!3d-34.52480164409396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a6386ba5c9%3A0xb8039ed75861da4d!2sVicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sec!4v1671675844993!5m2!1ses!2sec"
                          width="470"
                          height="470"
                          style={{ border: 0 }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                      </div>
                    </div>
                    <div id="map">
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="bi bi-shop" ></span>
                      </div>
                      <div className="text">
                        <p><span>Address:</span> Argentina, Buenos Aires 10016</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="bi bi-phone-vibrate"></span>
                      </div>
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="bi bi-envelope-at"></span>
                      </div>
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@henrymusic.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="bi bi-globe-americas"></span>
                      </div>
                      <div className="text">
                        <p><span>Website</span> <a href="...">henrymusic.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
