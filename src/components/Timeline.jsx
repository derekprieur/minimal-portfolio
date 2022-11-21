import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline() {
    return (
        <div className=' flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:w-7/12 max-w-sm'>
                <Title>Timeline</Title>
                {timeline.map((item) => (
                    <TimelineItem key={item.title} details={item.details} duration={item.duration} title={item.title} year={item.year} />
                ))}

            </div>
        </div>
    )
}

export default Timeline