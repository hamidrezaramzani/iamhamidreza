import React from "react";
import { contact_us  , contact_us_form} from "./styles.module.css";
import Title from "../Title";
function ContactUs() {
  return (
    <div className={contact_us}>
      <Title titleText={"#ContactUs"} description={"Get in touch with me"} />
      <div className={contact_us_form}>
        <form>
          <input type="text" placeholder="Type your email" />
          <input type="text" placeholder="Type your fullname" />
          <textarea placeholder="Type your text"></textarea> 
          <button>GET IN TOUCH</button>         
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
