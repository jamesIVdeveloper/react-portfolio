// import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";
import "./contact.css";

// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const { name, email, message } = formState;

//   const [errorMessage, setErrorMessage] = useState("");

//   function handleChange(e) {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);

//       if (!isValid) {
//         setErrorMessage("Your email is invalid");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }

//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }

//   return (
//     <section id="contact-section">
//       <h1 id="contact-title">Contact Me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             defaultValue={name}
//             onBlur={handleChange}
//             name="name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             defaultValue={email}
//             onBlur={handleChange}
//             name="email"
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <input
//             name="message"
//             defaultValue={message}
//             onBlur={handleChange}
//             row="5"
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button type="submit" id="contact-submit">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

function ContactForm() {
  return (
    <section className="contacts">
      <div className="contact">
        <h3 className="linkedin">LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/jamesivdeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/icons/linkedin-logo.png")}
            alt="linkedin's logo"
          />
        </a>
      </div>
      <div className="contact">
        <h3 className="github">GitHub</h3>
        <a
          href="https://github.com/jamesIVdeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/icons/github-logo.png")}
            alt="linkedin's logo"
          />
        </a>
      </div>
      <div className="contact">
        <h3 className="email">Email</h3>
        <p className="email-name">jamesIVdeveloper@gmail.com</p>
      </div>
    </section>
  );
}

export default ContactForm;
