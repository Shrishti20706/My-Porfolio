import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { skilldata } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress';
import './styles.scss';
 
const skills = () => {
  return (
    <section id="skills" className='skills'>
      <PageHeaderContent
        headerText="My skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__contentwrapper">
        {
          skilldata.map((item, i) => (
            <div key={i} className='skills__contentwrapper__innercontent'>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-200px)'
                }}
                end={{
                  transform: 'translateX(0px)'
                }}
              >
                <h3 className='skills__contentwrapper__innercontent__categorytext'>{item.label}
                </h3>
                <div className='skills__contentwrapper__innercontent__progressbar-container'>
                  {
                    item.data.map((skillitem, j) => (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity:1", "opacity:0"]}
                        iterationCount="1"
                      >
                        <div className='progressbar' key={j}>
                          <p>{skillitem.skillname}</p>
                          <Line
                            percent={skillitem.percentge}
                            strokeWidth="2"
                            strokeColor="var(--blue-theme-main-color)"
                            trailWidth={"2"}
                            strokeLinecap='square' />

                        </div>
                      </AnimateKeyframes>
                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default skills;