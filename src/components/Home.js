import kael from '../images/kael.png'
import cv from '../images/cv-kael.pdf'

function Home() {
    return (
        <section className="home-content">
            <div id="home" className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className='me-img' src={kael} alt="kael"/>
                    </div>
                    <div className="col-md-7">
                        <h1>Intégrateur web<br /> Developpeur front-end</h1>
                        <a className="btn btn-custom" href={cv} target="_blank" rel="noreferrer">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home