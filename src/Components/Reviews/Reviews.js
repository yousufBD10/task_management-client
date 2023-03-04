import React, { useContext } from 'react';
import "./Reviews.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { AuthContext } from '../../Context/UserContext';

const Reviews = () => {
    const {theme} = useContext(AuthContext);

    const data =[
        {
            id:0, 
            name:"John Alex",
            user_id:"@johnalex", 
            image:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1677432599~exp=1677433199~hmac=7a4c2f294947ba5de121240ca8383849c4ab6cc80a749e568a48d779cd812cb7",
            review:"Few things make me feel more powerful than setting up automations in TaskMaster to make my life easier and more efficient."
        },
        {
            id:1, 
            name:"Jeremy Picker",
            user_id:"@jeremypicker", 
            image:"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=740&t=st=1677432621~exp=1677433221~hmac=fd7ebbf7a8d083946899e40b9211d823db9f73daaab94359d6359a29da7ee247",
            review:"Thank you TaskMaster for making my life easier and more automated!. Communication is clear now, we can find all the tasks in one place, and the workload is decreasing nicely."
        },        
        {
            id:2, 
            name:"John MacGaffey",
            user_id:"@johnmacgaffey", 
            image:"https://img.freepik.com/free-photo/portrait-young-happy-man-smiling-against-white-space_58466-12722.jpg?w=740&t=st=1677432661~exp=1677433261~hmac=32af3609a3cb9e6b2cfe57e934a33caf3d43f43c7079a652da809472edd8e4b2",
            review:"TaskMaster is one of the best things that I have discovered till now. It's time to automate my imagination 🥳"
        },        
        {
            id:3, 
            name:"Andrew Smith",
            user_id:"@andrewmiami ", 
            image:"https://img.freepik.com/free-photo/happiness-positive-human-expressions-studio-shot-friendly-young-male-student-with-fair-hair-blue-eyes-laughing-good-joke-smiling-with-braces-looking-with-carefree-smile_176420-13661.jpg?t=st=1677423906~exp=1677424506~hmac=add580058179f0a058c9edd396ec49313574e755415aeeefda528904298c4ed9",
            review:"TaskMaster is becoming more and more a part of our company.  Thank you for this easy-to-use and efficient tool."
        },
        {
            id:4, 
            name:"Amandine Flora", 
            user_id:"@amandinefla ",
            image:"https://img.freepik.com/free-photo/close-up-shot-charismatic-friendly-looking-happy-nice-dark-skinned-girl-with-pierced-nose-perfect-smile-standing-delighted-cute-white-wall-sweater-enjoying-family-holiday-dinner_176420-35297.jpg?t=st=1677423906~exp=1677424506~hmac=c9f7696abbe641e85219f54ed44bf6e5f4780efd1dea5e4ca57bebc0914c8a7b",
            review:"Constantly chasing the high of creating a new integration in other areas of my life"
        },
        {
            id:5, 
            name:"Jessica Paul",
            user_id:"@jessica", 
            image:"https://img.freepik.com/free-photo/image-young-caucasian-woman-with-curly-dark-hair-stands-red-t-shirt-with-happy-relaxed-smile-hold-hands-jeans-isolated-white-background_176420-46715.jpg",
            review:"TaskMaster fulfilled our basic need to supervise projects and keep communication in one place."
        },
    ]
    return (
        
        <div className='px-6 py-24'>
        <h2 className='text-center text-4xl font-bold'>User Reviews</h2>
        <h2 className='text-center text-2xl font-bold -mb-40'>This is why people love TaskMaster</h2>
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
        data.map( user => (
                <SwiperSlide key={user.id}>
                    <div className='content-center shadow-lg rounded pb-7 bg-blue-200'>                            
                        <div className="lg:h-24 lg:w-24 lg:flex lg:flex-row rounded-full  ">
                            <img src={user.image} className="rounded-full lg:h-24 lg:w-24 pt-2 mx-auto pl-2" alt="image" />
                            <div className='ml-3 mt-5 flex flex-col pb-11 text-left'><b>{user.name} </b>{user.user_id}</div>
                        </div>
                        <div className='text-leftbg-slate-100 h-36 mt-3 pl-3 pt-2 pb-40 rounded-lg'>{user.review} </div>                        
                    </div>
                </SwiperSlide>   
            ))
        }
      </Swiper>
      </div>
     
      );
    }
export default Reviews;