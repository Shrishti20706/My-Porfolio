import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'
import './styles.scss'
import image from '../../images/myPic.jpg'

const Home = () => {

  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact')

  }
  return (
    <section id="home " className='="home'>
      <div className="home__text-wrapper">
        <h1>
          Hello,I'm Shrishti Jain
          <br />
          Front end developer
        </h1>
      </div>
      

      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateY(550px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
      >
        <div className='home__contact-me'>
          <img alt="pic" src={image} />

          <button onClick={handleNavigateToContact}>Hire Me</button>

        </div>
      
      
      
      </Animate>


    </section>
  )
}

export default Home;