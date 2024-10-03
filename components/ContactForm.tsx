import config from "@/config";

export default function ContactForm() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form
        action={config.CONTACT_FORM_ENDPOINT}
        method="post"
        acceptCharset="UTF-8"
      >
        <div>
          <input
            name="Name"
            placeholder="Full name"
            id="name"
            type="text"
            required
            data-testid="contact-form-name-input"
          />
        </div>
        <div>
          <input
            name="Email"
            placeholder="Your email"
            id="email"
            type="email"
            required
            data-testid="contact-form-email-input"
          />
        </div>
        <div>
          <textarea
            placeholder="Your message goes here..."
            data-testid="contact-form-message-input"
            name="message"
            required
          />
        </div>
        <div>
          <input type="submit" value="Send Message" />
          <div aria-hidden="true">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </div>
      </form>

      <hr />
      <a
        href="https://www.linkedin.com/in/spencerlepine"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Image
          src={icon.iconSrc}
          alt={`${icon.name} icon`}
          width={40}
          height={40}
          className="icon-circle"
        /> - TODO */}
        Message me on LinkedIn
      </a>
    </section>
  );
}
