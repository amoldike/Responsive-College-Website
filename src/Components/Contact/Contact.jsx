import React from "react";
import "./Contact.css";
import msgIcon from "../../assets/msg-icon.png"
import emailIcon from "../../assets/mail-icon.png"
import phoneIcon from "../../assets/phone-icon.png"
import locationIcon from "../../assets/location-icon.png"
import whiteArrow from "../../assets/white-arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e74231fe-1368-4d44-b502-76b0e8aee615");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) { 
            console.log(data);
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
    return (
        <div className="contact">
            {/* ------------------------Contact Left  */}
            <div className="contact-col">
                <h3>Send us a message <img src={msgIcon} alt="msg" /></h3>
                <p>
                    Feel free to reach out through contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li> <img src={emailIcon} alt="icons" />Contact@edusite.dev</li>
                    <li> <img src={phoneIcon} alt="icons" />+1 123-456-7890</li>
                    <li> <img src={locationIcon} alt="icons" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>
            </div>

            {/* ------------------------Contact Right  */}

            <div className="contact-col">

                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name " required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Write your message here..!</label>
                    <textarea name="message" rows="6" placeholder="Enter your message..!" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit Now
                        <img src={whiteArrow} alt="arrow" />
                    </button>

                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
