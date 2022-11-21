import React from 'react'

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className=' text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>Derek</h1>
            <p className=' text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
            <p className=' text-sm max-w-xl mb-6 font-bold'>Im Derek. I have been a student in tech since 2013 and learning a variety of fields along the way such as Computer Science, IT Networking & Quality Assurance.
                <br />Since the start of 2022, most of my focus has gone straight into acquiring more development skills where I have enjoyed learning React, JavaScript, Tailwind CSS and much much more.
                <br />Outside of technology, I am very passionate about veganism/animal rights. I also love things like running, weightlifting, reading, cooking and anime.</p>
        </div>
    )
}

export default Intro