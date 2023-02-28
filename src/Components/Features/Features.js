import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ServiceCard from '../Cards/ServiceCard/ServiceCard';
import './Features.css'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';

const Features = () => {
    const { theme } = useContext(AuthContext);

    const features = [
        {
            image: 'https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg?w=740&t=st=1677584054~exp=1677584654~hmac=46945a78adbc3d5762a3240edc74c78808be89eb162a7e44d3acfa6b140321b4',
            title: 'WorkSpace',
            text: `Explore our unique collection of iconic London buildings in 60 locations across the capital. Whether you are a team of one or one hundred, discover our stunningly designed flexible offices, studios, workshops and spaces from Chiswick to Camden, Waterloo to Whitechapel.`
        },
        {
            image: 'https://img.freepik.com/free-vector/software-engineer-statistician-visualizer-analyst-working-project-big-data-conference-big-data-presentation-data-science-concept-bright-vibrant-violet-isolated-illustration_335657-391.jpg?w=740&t=st=1677584323~exp=1677584923~hmac=e195c3a6aa3ca7ca15a16818f0a86629afd4126f8f8d9560cb44f0c3b81905ba',
            title: 'Build Project',
            text: `Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.`
        },
        {
            image: 'https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=740&t=st=1677583935~exp=1677584535~hmac=a9038c6483216f5bbb6f4e7a98ed35bcdbbccb496af0a31f52c5acb007cffc21',
            title: 'Team Collaboration',
            text: `Working together is hard work—for a lot of reasons. You likely have teammates who work in different locations and different hours. Plus, everyone’s work is now spread across multiple apps. The result?`
        },
<<<<<<< HEAD
        {
            image: 'https://img.freepik.com/free-vector/task-management-abstract-concept-illustration-project-manager-tool-business-software-productivity-online-platform-task-management-application-progress-tracking_335657-513.jpg?w=740&t=st=1677582897~exp=1677583497~hmac=efe4c0dd5be944d6c8dd891baddec86a9f9e0a20d7077211135b6459fb85787c',
            title: 'Single Task Modal',
            text: `Explore our unique collection of iconic London buildings in 60 locations across the capital. Whether you are a team of one or one hundred, discover our stunningly designed flexible offices, studios, workshops and spaces from Chiswick to Camden, Waterloo to Whitechapel.`
        },
        {
            image: 'https://img.freepik.com/free-vector/boy-checking-giant-check-list-background_23-2148095182.jpg?t=st=1677583681~exp=1677584281~hmac=d6a338be7330b160f2132fad31f0ef2ab16538e202bd05d935512947404cc9e1',
            title: 'Task List',
            text: `Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.`
        },
        {
            image: 'https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg?w=740&t=st=1677583583~exp=1677584183~hmac=4165357c080a86610297ce658051b72974e3998b6996605f431c6bfb5352193e',
            title: 'Task Scheduling',
            text: `Working together is hard work—for a lot of reasons. You likely have teammates who work in different locations and different hours. Plus, everyone’s work is now spread across multiple apps. The result?`
        },
       
    ]
    return (
        <div className={theme?.features}>
        <div className='w-full md:mx-11 md:px-11 sm:px-12   pb-16 my-16'>
            <h3 className='text-3xl text-center font-bold pt-28'>POWERFUL WAYS TO GROW</h3>
            <h2 className='text-2xl font-bold text-center'>Do More With <span className='text-blue-700'>TaskMaster</span></h2>
            <p className='text-sm mt-1 -mb-40 text-center font-semibold'>TaskMaster's intuitive features give any team the ability to quickly set up and customize <br /> workflows for just about anything.</p>
            

            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                  
        // slidesPerView={3}
        spaceBetween={30}
        
         autoplay={{
            delay:3250,
            // disableOnInteraction: false,
         }}
        
       
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        >

        {
        features.map((feature, i) => 

        <SwiperSlide key={i} image={feature.image} title={feature.title} text={feature.text}>
        {/* <ServiceCard key={i} image={feature.image} title={feature.title} text={feature.text}></ServiceCard> */}                  
        <div className={theme?.feature}>
        <div className="h-full w-72 ml-11  rounded-lg bg-white text-3xl text-left">
        <article className=" rounded-lg border border-gray-100 p-2 transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded p-2 h-40">
                <img src={feature.image} className="lg:h-36 md:h-40 object-cover mx-auto" alt="image" />
            </span>
        <div className="mt-auto">
            <h3 className="mt-0.5 text-lg font-medium ">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
                {feature.text.slice(0,150)}...
            </p>
            <p>
            <Link to={'/'} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black">
            Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></Link></p>         
        </div>
        </article>      
        </div>
        </div>
        </SwiperSlide>
        )
        }
        </Swiper>
           
=======

    ]
    return (
        <div className={theme?.features}>
            <div className='p-4 md:mx-11 md:px-11 sm:px-12  lg:px-32 my-16'>
                <h3 className='text-3xl text-center font-bold pt-28'>POWERFUL WAYS TO GROW</h3>
                <h2 className='text-2xl font-bold text-center'>Do More With <span className='text-blue-700'>TaskMaster</span></h2>
                <p className='text-sm mb-8 mt-1 text-center font-semibold'>TaskMaster's intuitive features give any team the ability to quickly set up and customize <br /> workflows for just about anything.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-16 sm:px-2 my-12 pb-32'>
                    {
                        features.map((feature, i) => <ServiceCard key={i} image={feature.image} title={feature.title} text={feature.text}></ServiceCard>)
                    }
                </div>
            </div>
>>>>>>> f558b8b86ba3d62b1abd1395e0bfbffbf1899e8b
        </div>
    );
};

export default Features;