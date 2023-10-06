import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ExternalLink = ({ to, children, className }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    <span className={className}>{children}</span>
  </a>
);


const contact = () => {
  return (
    <section id="contact" className='contact'>
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}>
          <h3 className='contact__content__header-text'>Let's Talk</h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}>
          <div className='contact__content__form'>
            <div className='contact__content__form__controlswrapper'>
              <div>
                <input required name='name' className='inputname' type='text'></input>
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div >
                <input required name='email' className='inputemail' type='text'></input>
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>
              <div >
                <textarea required name='description' className='inputdescription' rows="7" type='text' ></textarea>
                <label htmlFor='description' className='descriptionLabel'>Description</label>
              </div>

            </div>
            <button>Submit</button>
          </div>

        </Animate>
      </div>

      <div className='connection'>
        <Animate
          play
          duration={1}
          delay={0.8}
          start={{
            transform: 'translateY(550px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3>Connect with me on</h3>
          <div className='connection__socialmedia'>



            <ExternalLink to={`https://www.linkedin.com/in/shrishti-jain-16ba74206/`} className="icon">
              <FaLinkedin size={35} />
            </ExternalLink>

            <ExternalLink to={`https://github.com/Shrishti20706`} className="icon">
              <FaGithub size={35} />
            </ExternalLink>

            <Link to={`mailto:shrishtiniaj2661@gmail.com`} className="icon">
              <FaEnvelope size={35} />
            </Link>
            <ExternalLink to={`https://www.instagram.com/shrishti_niaj/`} className="icon">
              <FaInstagram size={35} />
            </ExternalLink>




          </div>
        </Animate>


      </div>
    </section>
  )
}

export default contact;