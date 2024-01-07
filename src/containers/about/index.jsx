import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';



const personalDetails = [
  {
    label: "Name",
    value: "Shrishti Jain",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "GangaDevi Nagar,Indore",
  }, {
    label: "Email",
    value: "shrishtiniaj2661@gmail.com",
  },
  {
    label: "Contact No",
    value: "8103754302",
  },
];

const jobSummary = "I'm a Frontend Developer with a strong background in HTML, CSS, JavaScript, ReactJs ,Java ,RPA and modern frameworks. My objective is to collaborate effectively within cross-functional teams and apply my technical skills to design and develop outstanding user experiences. I'm enthusiastic about contributing my expertise to enhance Company's web projects and drive their mission forward.";
const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='about__content'>
        <div className='about__content__personalwrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className='personalInfoHeader'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>


        <div className='about__content__serviceswrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
          <div className='about__content__serviceswrapper__innercontent'>
            <div>
              <FaDev size={60} color="var(--blue-theme-main-color)"></FaDev>
            </div>

            <div>
              <DiAndroid size={60} color="var(--blue-theme-main-color)"></DiAndroid>
            </div>

            <div>
              <FaDatabase size={60} color="var(--blue-theme-main-color)"></FaDatabase>
            </div>

            <div>
              <DiApple size={60} color="var(--blue-theme-main-color)"></DiApple>
            </div>
          </div>
          </Animate>

        </div>

      </div>
    </section>
  )
}

export default About;