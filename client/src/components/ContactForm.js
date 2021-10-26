import React from "react";

const ContactForm = () => {
  return (
    <div className="wrapper-form">
      {/* Form */}
      <div className="form-container">
        {/* <form action="https://formspree.io/f/{form_id}" method="post"> */}
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>

          <label>
            E-Mail
            <input type="email" name="email" />
          </label>

          <label>
            Tel
            <input type="tel" name="phone" />
          </label>

          <input type="submit" value="Send" />
        </form>
      </div>

      {/* Map */}
      <div className="map-contaier"></div>
    </div>
  );
};

export default ContactForm;
