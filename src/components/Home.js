
import cv from '../images/cv-kael.pdf'

function Home() {
    return (
        <section className="home-content">
            <div id="home" className="container">
                <h1>Intégrateur Graphiste<br /> Sénior</h1>
                <a className="btn btn-custom" href={cv} target="_blank" rel="noreferrer">Télécharger mon CV</a>
            </div>
        </section>
    )
}

export default Home