import "./contact.css";

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
