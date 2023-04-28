import ContactForm from "./ContactForm"

function Contact () {
    return (
        <section className="contact-content">
            <div id="contact" className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h2>Entrer en contact</h2>
                        <p className="contact-txt">Je suis très accessible et j'aimerais vous parler. N'hésitez pas à m'appeler, envoyez moi un mail. Suivez-moi sur les réseaux sociaux ou remplissez simplement le formulaire de demande.</p>
                        <div className="contact-info">
                            <span>+261 34 42 296 82</span>
                            <span>kaelmika5@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ContactForm />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Contact