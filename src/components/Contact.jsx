import React from "react";
import { useDispatch } from "react-redux";
// import { validate } from "";
import { API_KEY } from "../../key";

const Contact = () => {
  // const dispatch = useDispatch();
  //   const [errors, setErrors] = useState({});
  //   const [userInput, setUserInput] = useState({});
  //   const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   formData.append("access_key", API_KEY);
  //   const res = await validate(userInput, "contactForm");

  //   console.log(res);

  //   if (!res) {
  //     try {
  //       const response = await fetch("https://api.web3forms.com/submit", {
  //         method: "POST",
  //         body: formData,
  //       });
  //       console.log(response);

  //       setSubmitted(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   setErrors(!res ? {} : res);
  // };

  // if (submitted) {
  //   return <p>Thanks for getting in touch!</p>;
  // }

  return (
    <>
      <div id="contact">
        <h1>Contact me</h1>
        <p>
          Got some feedback or need some info? Get in touch, I'd love to hear
          from you. Aternatively you can{" "}
          <a href="mailto:me@tanyafrench.com">email</a> or{" "}
          <a href="tel:+44 77236 89778">call me.</a>{" "}
        </p>
        <div className="formWrapper">
          <form
          // onInput={(e) => {
          //   setUserInput({ ...userInput, [e.target.name]: e.target.value });
          // }}
          // onSubmit={handleSubmit}
          >
            <input
              id="name"
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
      </div>
    </>
  );
};

export default Contact;
