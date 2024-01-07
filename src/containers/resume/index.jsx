import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from './utils';
import "react-vertical-timeline-component/style.min.css"
import './styles.scss'
import {MdWork} from 'react-icons/md'

 const Resume=()=> {
  return (
    <section id="resume" className='resume'>
      <PageHeaderContent 
      headerText="My Resume"
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="timeline">
        <div className="timeline__projects">
          <h3 className='timeline__projects__header-text'>
            Projects
          </h3>
          <VerticalTimeline layout={'1-column'} lineColor="var(--blue-theme-main-color"
          >
            {
              data.projects.map((item,i)=>(
                <VerticalTimelineElement key={i}
                className='timeline__projects__vertical-timeline-element'  
                contentStyle={{
                  background:"none",
                  color:'var(--blue-theme-sub-text-color)',
                  border:'1.5px solid var(--blue-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background:'#181818',
                  color:'var(--blue-theme-main-color)'

                }}
                >
                  
                  <div className='verical-timeline-element-title-wrapper'>
                  
                    <h3>
                      {item.title}

                    </h3>

                    

                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                      {item.description}
                    </p>

                </VerticalTimelineElement>

                  

              ))
            }

          </VerticalTimeline>
        </div>


        <div className='timeline__academic'>
          <h3 className='timeline__academic__header-text'>
            Academic
          </h3>
          <VerticalTimeline layout={"1-column"} lineColor='var(--blue-theme-main-color)' >
          {
              data.Academic.map((item,i)=>(
                <VerticalTimelineElement key={i}
                className='timeline__projects__vertical-timeline-element'
                contentStyle={{
                  background:"none",
                  color:'var(--blue-theme-sub-text-color)',
                  border:'1.5px solid var(--blue-theme-main-color)'
                  
                }}
                icon={<MdWork/>}
                iconStyle={{background:'#181818',
                color:'var(--blue-theme-main-color)'
              }}
                
                >
                  <div className='verical-timeline-element-title-wrapper'>
                  
                    <h3 >
                      {item.title}

                    </h3>
                    

                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                      {item.school}
                    </p>
                    <p className="vertical-timeline-element-title-wrapper-description">
                      {item.perc}
                    </p>

                </VerticalTimelineElement>

                  

              ))
            }

          </VerticalTimeline>

        </div>
      </div>
    </section>
  )
}

export default Resume;