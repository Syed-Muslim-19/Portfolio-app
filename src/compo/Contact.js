import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="containerContact" id="Contacts">
      <h3
        style={{
          color: "#f75023",
          fontSize: "250%",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Contacts
      </h3>
      <div className="ContactForm">
        <div className="container" style={{ marginLeft: "0px" }}>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xl-6 nodisplay"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p
                style={{ float: "left", marginTop: "-170px", color: "#6f6b80" }}
              >
                In my journey as a Web Developer 🎨, I've blended creativity
                with technical prowess, pushing boundaries to bring ideas to
                life. With a passion for creativity 😊, I'm committed to
                delivering innovative solutions that make a meaningful impact.
                Explore my portfolio for diverse projects reflecting dedication
                and a love for learning 📚. Excited for future opportunities to
                contribute my skills, collaborate, and tackle new challenges.
                Thanks for visiting! Let's create something extraordinary
                together! 🚀✨
              </p>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 text-center">
              <div
                className="contactForm"
                style={{ float: "right", marginTop: "-200px" }}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      ></input>
                      {errors.name && (
                        <span className="errorMessage">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      ></input>
                      {errors.subject && (
                        <span className="errorMessage">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className="submit-btn btn btn-primary AM"
                    disabled={disabled}
                    type="submit"
                    style={{ width: "130px", fontSize: "20px" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              } // Clear the alert when close button is clicked
            ></button>
          </div>
        )}
      </div>
    </div>
  );
}
