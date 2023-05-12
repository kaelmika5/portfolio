
import ButtonCustom from "./Button"

function ContactForm () {
    return (
        <form name="contact" method="post" data-netlify="true" onSubmit="submit">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Nom"/>
            <input type="mail" name="mail" placeholder="Mail"/>
            <input type="text" name="subject" placeholder="Sujet"/>
            <textarea name="message" placeholder="Votre message"></textarea>
            <ButtonCustom name="Envoyer" type="submit"/>    
        </form>
    )
}

export default ContactForm