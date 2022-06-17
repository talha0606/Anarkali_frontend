import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

// import axios from "axios";
// import { BiWindows } from "react-icons/bi";

function ContactUs() {
  const [sname, setsname] = useState("");
  const [sdescription, setsdescription] = useState("");
  const [email, setemail] = useState("");

  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_pjfm4w9",
  //         "template_pk7yjr4",
  //         form.current,
  //         "BDLp3Kfch_HCwLvBy"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           window.alert("Email sent");
  //           e.target.reset();
  //         },
  //         (error) => {
  //           window.alert(error.text);
  //           console.log(error.text);
  //         }
  //       );
  //   };

  const onChangeClick = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_pjfm4w9",
        "template_pk7yjr4",
        form.current,
        "BDLp3Kfch_HCwLvBy"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Email sent");
          //   e.target.reset();
        },
        (error) => {
          window.alert(error.text);
          console.log(error.text);
        }
      );
  };
  //   (e) => {
  //     e.preventDefault();
  //     console.log("onChangeClick");

  //     try {
  //       axios
  //         .then((res) => {
  //           window.alert("Email Sent Successfully.");
  //         })
  //         .catch((err) => {
  //           if (err.response.status === 422) {
  //             window.alert(err);
  //             window.alert("Email already Exist");
  //           } else if (err.response.status === 402) {
  //             window.alert("Please filled the empty field properly");
  //           }
  //         });
  //     } catch (err) {
  //       //   window.alert("Axios not working");
  //       window.alert(err.text);
  //     }
  //   };

  return (
    <>
      <form ref={form} className="login-form">
        <Link to="/">
          <img src={logo} className="login-logo" alt="logo" />
        </Link>

        <label htmlFor="user_name">Name</label>
        <input
          autoComplete="off"
          type="text"
          id="user_name"
          name="user_name"
          value={sname}
          onChange={(e) => setsname(e.target.value)}
          placeholder="Your Name.."
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="abc@gmail.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          rows="4"
          cols="50"
          name="message"
          id="message"
          value={sdescription}
          onChange={(e) => setsdescription(e.target.value)}
          placeholder="Type Your Message Here.."
          required
        ></textarea>

        <input
          type="button"
          value="SEND EMAIL"
          name="register"
          onClick={(e) => {
            onChangeClick(e);
          }}
        />
      </form>
      <div className="login-footer contact-us-footer">
        <hr />
        <p> @ 2022, Anarkali Bazar, Lhr. </p>
      </div>
      {/* <form className="login-form">
        <Link to="/">
          <img src={logo} className="login-logo" alt="logo" />
        </Link>
        <label htmlFor="sName">Name</label>
        <input
          autoComplete="off"
          type="text"
          id="sName"
          name="sName"
          value={sname}
          onChange={(e) => setsname(e.target.value)}
          placeholder="Your Name.."
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="abc@gmail.com"
        />

        <label htmlFor="sDescription">Message</label>
        <textarea
          rows="4"
          cols="50"
          name="sDescription"
          form="usrform"
          id="sDescription"
          value={sdescription}
          onChange={(e) => setsdescription(e.target.value)}
          placeholder="Type Your Message Here.."
        ></textarea>
        

        <input
          type="button"
          value="SEND EMAIL"
          name="register"
          //   onClick={(e) => {
          //     // handleUpload(e);
          //     onChangeClick(e);
          //   }}
        />
      </form>
      <div className="login-footer contact-us-footer">
        <hr />
        <p> @ 2022, Anarkali Bazar, Lhr. </p>
      </div> */}
    </>
  );
}

export default ContactUs;
