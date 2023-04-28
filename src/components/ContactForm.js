
import ButtonCustom from "./Button"

function ContactForm () {
    return (
        <form>
            <input type="text" placeholder="Nom"/>
            <input type="mail" placeholder="Mail"/>
            <input type="text" placeholder="Sujet"/>
            <textarea placeholder="Votre message"></textarea>
            <ButtonCustom name="Envoyer"/>    
        </form>
    )
}

export default ContactForm