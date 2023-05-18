import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefData from '../../../ChefData/ChefData';


const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs)
    return (

        <div>
            <div className='md:flex justify-between items-center m-4' >
                <img className='w-2/4 ' src="/image/car2.avif" />
                <h1 className='text-2xl text-red-400'>WELCOME TO THE WORLD OF DELICIOUS TASTY RECIPE.... </h1>
            </div>


            <h1 className='text-4xl bold text-center text-red-500'>Our Experienced Chefs</h1>
            <div className='md:grid grid-cols-3 gap-4 m-4'>
                {
                    chefs.map(chef => <ChefData
                        key={chef.id}
                        chef={chef}
                    ></ChefData>)
                }

            </div>
            <div className='text-center m-4'>
                <h1 className='text-4xl bold text-center text-red-500 mb-4'>About Us</h1>
                <p className='border-2 p-2 text-center'>Chinese cuisine encompasses the numerous cuisines originating from China, as well as overseas cuisines created by the Chinese diaspora. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia and beyond, with modifications made to cater to local palates. Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide.

                    The preferences for seasoning and cooking techniques of Chinese provinces depend on differences in social class, religion, historical background, and ethnic groups. </p>
            </div>
            <h1 className='text-4xl bold text-center text-red-500 mb-4'>Out Strengths</h1>
            <div className='md:flex justify-between'>


                <div className='border-2 p-2 text-center m-4'>
                    <h2 className='text-2xl bold text-center text-red-500 mb-4'>Our Customers</h2>
                    <p>“What does a chef do?” is a deeper question than it might seem on its surface. Put simply, chefs are professionals who make food for a living. Yet there are many different types of chefs with different responsibilities and skills. Together, they are responsible for preparing food and helping a kitchen run smoothly.</p>
                </div>
                <div className='border-2 p-2 text-center m-4'>
                    <h2 className='text-2xl bold text-center text-red-500 mb-4'>Our Dedicated Chefs</h2>
                    <p>“What does a chef do?” is a deeper question than it might seem on its surface. Put simply, chefs are professionals who make food for a living. Yet there are many different types of chefs with different responsibilities and skills. Together, they are responsible for preparing food and helping a kitchen run smoothly.</p>
                </div>
                <div className='border-2 p-2 text-center m-4'>
                    <h2 className='text-2xl bold text-center text-red-500 mb-4'>Our Entire Team Members</h2>
                    <p>“What does a chef do?” is a deeper question than it might seem on its surface. Put simply, chefs are professionals who make food for a living. Yet there are many different types of chefs with different responsibilities and skills. Together, they are responsible for preparing food and helping a kitchen run smoothly.</p>
                </div>
            </div>

        </div>

    );
};

export default Home;