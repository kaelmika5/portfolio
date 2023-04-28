import reactImg from '../images/react-logo.png'
import htmlImg from '../images/html.png'
import odooImg from '../images/odoo.png'
import bootstrapImg from '../images/bootstrap.png'
import wpImg from '../images/wp.png'
import photoshopImg from '../images/photoshop.png'
import figmaImg from '../images/figma.png'
import vueImg from '../images/vue.png'
import gitImg from '../images/git.png'

const skillsList = ['html5', 'css3', 'js', 'reactjs', 'vuejs', 'bootstrap', 'wordpress', 'odoo', 'photoshop', 'figma', 'git', 'svn', 'wscode', 'pycharm']

function SkillSingle() {
    return <ul className="skills-list">
        {skillsList.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
}
function Skills() {
    return (
        <section className="skills-content">
            <div id="skills" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Skills</h2>
                        <SkillSingle />
                    </div>
                    <div className="col-md-6">
                        <div className="img-skills">
                            <img src={htmlImg} alt="html 5" />
                            <img src={reactImg} alt="react js" />
                            <img src={vueImg} alt="vue js" />
                            <img src={bootstrapImg} alt="bootstrap" />
                            <img src={wpImg} alt="wp" />
                            <img src={odooImg} alt="odoo" />
                            <img src={photoshopImg} alt="photoshop" />
                            <img src={figmaImg} alt="figma" />
                            <img src={gitImg} alt="git" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills