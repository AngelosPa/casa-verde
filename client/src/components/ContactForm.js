import React from "react";

const ContactForm = () => {
  return (
    <div className="wrapper-contact">
      {/* Form */}
      <div className="form-container">
        <div className="blur"></div>
        <form>
          <label>
            <h5>Name</h5>
            <input type="text" name="name" />
          </label>

          <label>
            <h5>E-Mail </h5>
            <input type="email" name="email" />
          </label>

          <label>
            <h5>Tel</h5>
            <input type="tel" name="phone" />
          </label>

          <label>
            <h5>Nachricht</h5>
            <textarea name="message"></textarea>
          </label>

          <input className="form-btn" type="submit" value="Send" />
        </form>
      </div>

      {/* Map */}
      <div className="map-contaier">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.2740761101745!2d8.065421315902478!3d49.55485157936184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47963cbd09e0582d%3A0x682f70d2122924b0!2sCasa%20Verde!5e0!3m2!1sde!2sde!4v1635237432543!5m2!1sde!2sde"
          width="300"
          height="300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
