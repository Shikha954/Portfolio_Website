import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'


const About = () => {
  return (
    <section id="about" data-aos="fade-in">

        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Imag" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I am a passionate full-stack web developer with experience in building innovative and scalable web applications.
                </p>
                <p>
                Hi Everyone, I am Shikha Raj from Patna, India.I am a final year student pursuing B.Tech in Computer Science and Engineering at KIIT University, Bhubaneswar.My skills include proficiency in HTML, CSS, JavaScript, React, Redux, Tailwind CSS, Node.JS, Express.JS, MongoDB, Git, Github, Visual Studio Code and Netlify.Currently I am working as an Open source contributor in GSSoC'23.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About