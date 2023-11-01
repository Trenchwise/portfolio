import React from "react";
import { API_KEY } from "../../key";
import { validate } from "../validation";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", API_KEY);
    // const res1 = await validate(userInput, "contactForm");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="form">
      <h1>Get in touch!</h1>
      <p>
        Got some feedback, need some info? Get in touch, I'd love to hear from
        you. Aternatively you can <a href="mailto:me@tanyafrench.com">email</a>{" "}
        or <a href="tel:+44 77236 89778">call me.</a>{" "}
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder="Message here"
            rows="7"
            cols="7"
          ></textarea>
        </div>
        <button className="projectButton">Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default App;
