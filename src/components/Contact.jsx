import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact me</h1>
      <p>
        Got some feedback or need some info? Get in touch, I'd love to hear from
        you{" "}
      </p>
      <div className="formWrapper">
        <form>
          <input
            className="formInput"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="formInput"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>

          <button className="projectButton">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
