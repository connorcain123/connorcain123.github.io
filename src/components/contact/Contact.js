import './contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="section-title">Get in touch with me</h1>
            <div className="contact-container">
                <div className="contact-text-div">
                    <p className="contact-blurb">
                        Thanks for taking the time to check out my online portfolio. 
                        If you would like to get in contact with me use the form 
                        on the right to send me an email, or the phone number of the left 
                        to give me a call or text. Either that or you can simply reach me 
                        on linked in :)
                    </p>
                </div>
                <form className="contact-form">
                    <FormInput text="Name" type="text" />
                    <FormInput text="Email" type="email" />
                    <FormInput text="Subject" type="text" />
                    <FormInput text="Message" type="textarea" />
                    <button className="form-submit-button" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

function FormInput(props) {
    return (
        <div className="contact-form-input-div">
            <label className="contact-form-label" htmlFor={props.text}>{props.text}</label>
            {props.type === "textarea" ? 
            <textarea className="contact-form-textarea" name={props.text} required /> :
            <input className="contact-form-input" name={props.text} type={props.type} required />}
        </div>
    );
}
