import React from 'react';
import ServiceCard from '../Cards/ServiceCard/ServiceCard';

const Features = () => {
    const waysToGrowData = [
        {
            image: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-workspace-icon-png-image_4013881.jpg',
            title: 'WorkSpace',
            text: `Explore our unique collection of iconic London buildings in 60 locations across the capital. Whether you are a team of one or one hundred, discover our stunningly designed flexible offices, studios, workshops and spaces from Chiswick to Camden, Waterloo to Whitechapel.`
        },
        {
            image: 'https://image.pngaaa.com/599/477599-middle.png',
            title: 'Build Project',
            text: `Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.`
        },
        {
            image: 'https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/team-collaboration-icon.png',
            title: 'Team Collaboration',
            text: `Working together is hard work—for a lot of reasons. You likely have teammates who work in different locations and different hours. Plus, everyone’s work is now spread across multiple apps. The result?`
        },
        {
            image: 'https://i.dlpng.com/static/png/7200231_preview.png',
            title: 'Task Management',
            text: `Task management software tends to have fewer features than standard project management platforms. That’s because it is intended to be used by entire teams, not just by managers or “power users.” The focus of task management tools is strictly execution-oriented, centered on organizing and managing tasks. Thus, these solutions tend to be limited when.`
        },
        {
            image: 'https://www.pngall.com/wp-content/uploads/2017/01/Growth-Chart-PNG.png',
            title: 'Track Progress',
            text: `Project tracking is the process of monitoring a project's progress against the original project plan. The goal is to make corrective actions as soon as you spot deviations (or occurrences that may lead to deviations) so the team stays on track. When done right, project tracking empowers your team to: Stay on schedule.`
        },
        {
            image: 'https://e7.pngegg.com/pngimages/462/395/png-clipart-public-relations-social-group-logo-team-onu-blue-text-thumbnail.png',
            title: 'User Friendly',
            text: `he term user-friendly describes computer software, hardware, or a service designed to make the user's life easier. We like to think of Computer Hope as a user-friendly website. Anything difficult or frustrating for the user to use is not considered user-friendly.`
        }
    ]
    return (
        <div className='w-full px-12 mb-12'>
            <h3>POWERFUL WAYS TO GROW</h3>
            <h2 className='text-2xl font-bold'>Do more With TaskMaster</h2>
            <p className='text-sm mb-8 mt-1'>TaskMaster's intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    waysToGrowData.map((way, i) => <ServiceCard key={i} image={way.image} title={way.title} text={way.text}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Features;