import me from '../images/me.png'
import React from 'react';

function About () {
    const [moreAbout, setMoreAbout] = React.useState(true);
    const moreAboutTxt = `En tant qu'intégrateur web graphiste senior, j'utilise des technologies de pointe pour créer des sites web modernes et performants. Voici quelques-unes des technologies que j'utilise fréquemment :

    HTML (HyperText Markup Language) : c'est le langage de balisage standard utilisé pour créer des pages web. Il permet de structurer le contenu et de définir la présentation des éléments.
    CSS (Cascading Style Sheets) : c'est un langage de feuilles de style utilisé pour décrire la présentation visuelle des pages web. Il permet de modifier les couleurs, les polices, les mises en page, etc.
    JavaScript : c'est un langage de programmation utilisé pour ajouter des interactions dynamiques aux pages web. Il permet de créer des animations, des effets visuels, des formulaires interactifs, etc.
    jQuery : c'est une bibliothèque JavaScript qui simplifie l'écriture de code JavaScript. Elle permet d'ajouter des effets visuels et des interactions utilisateur plus facilement.
    CMS (Content Management System) : ce sont des systèmes de gestion de contenu qui permettent de créer et de gérer des sites web plus facilement. Les CMS les plus populaires sont WordPress, Drupal et Joomla.`
    
    return (
        <section className="about-content">
            <div id="about" className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>À propos de moi</h2>
                        <p>je m'appelle Kaël et je suis un intégrateur web graphiste senior avec 7 ans d'expérience dans le domaine. Je suis titulaire d'un DTS en informatique multimedia et web, ce qui indique que j'ai une formation approfondie en programmation et en design web. Mon expertise me permet de concevoir des sites web modernes et intuitifs pour mes clients en utilisant des technologies de pointe.</p>
                        {!moreAbout ? <p>{moreAboutTxt}</p> : ''}
                        <a href='/#about' className="btn-custom" onClick={() => setMoreAbout(!moreAbout)}>
                            {!moreAbout ? "Lire moins" : "Lire plus"}
                        </a>
                    </div>
                    <div className="col-md-4">
                        <img src={me} alt="Mickaël Arc-Ange, developpeur front-end"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About