import React from 'react';
import ServiceCard from '../Cards/ServiceCard/ServiceCard';

const Features = () => {
    const waysToGrowData = [
        {
            image: 'https://cdn-icons-png.flaticon.com/512/7481/7481977.png',
            title: 'WorkSpace',
            text: `Explore our unique collection of iconic London buildings in 60 locations across the capital. Whether you are a team of one or one hundred, discover our stunningly designed flexible offices, studios, workshops and spaces from Chiswick to Camden, Waterloo to Whitechapel.`
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/4257/4257674.png',
            title: 'Build Project',
            text: `Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.`
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/9015/9015562.png',
            title: 'Team Collaboration',
            text: `Working together is hard work—for a lot of reasons. You likely have teammates who work in different locations and different hours. Plus, everyone’s work is now spread across multiple apps. The result?`
        },
       
    ]
    return (
        <div className='w-full sm:px-12 lg:px-32 my-16'>
            <h3 className='text-3xl text-center  font-bold'>POWERFUL WAYS TO GROW</h3>
            <h2 className='text-2xl font-bold text-center '>Do More With <span className='text-blue-700'>TaskMaster</span></h2>
            <p className='text-sm mb-8 mt-1 text-center font-semibold '>TaskMaster's intuitive features give any team the ability to quickly set up and customize <br /> workflows for just about anything.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-16 sm:px-2 my-12 '>
                {
                    waysToGrowData.map((way, i) => <ServiceCard key={i} image={way.image} title={way.title} text={way.text}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Features;