import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../Style/AboutStory.css'
  

const AboutStory = () => {
  const milestones = [
    { year: "2010", description: "In 2010, we established Aelia Psychotherapy with a vision to provide compassionate and personalized mental health services. Our commitment to client-centered care began here, laying the foundation for our future growth." },
    { year: "2015", description: "By 2015, Aelia Psychotherapy expanded its services to include family counseling and mental health assessments. Our team of licensed professionals grew, and we introduced innovative therapeutic techniques to better serve our clients." },
    { year: "2020", description: "In 2020, despite global challenges, Aelia Psychotherapy adapted to offer virtual therapy sessions, ensuring uninterrupted support for our clients. Our focus on integrating modern technologies has allowed us to reach a broader community." },
    { year: "2024", description: "Today, Aelia Psychotherapy stands as a beacon of hope and healing in the mental health community. Our dedicated team continues to provide exceptional care, helping clients navigate their paths to emotional wellness with empathy and expertise." },

  ];

    
  return (
    <div className='about-story'>

<VerticalTimeline>
  {milestones.map((milestone,index)=>(
<VerticalTimelineElement key={index} className='vertical-timeline-element--work'
            contentStyle={{ background: '#373A6D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #373A6D' }}
            date={milestone.year}
            iconStyle={{ background: '#373A6D', color: '#fff' }}
            icon={<FaRegCalendarAlt />}
>
<h3 className="vertical-timeline-element-title">{milestone.year}</h3>
<p>{milestone.description}</p>


</VerticalTimelineElement>

            ))}
            </VerticalTimeline>


    </div>
    
  )
}

export default AboutStory
