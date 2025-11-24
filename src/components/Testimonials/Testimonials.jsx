import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
    {
        id:1,
        name:"mountains",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis voluptatibus iste, id expedita tempore quas recusandae, totam beatae explicabo repellat exercitationem! Nostrum, quasi dolores.",
        img:"https://picsum.photos/200/300"
    },
    {
        id:2,
        name:"plants",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis voluptatibus iste, id expedita tempore quas recusandae, totam beatae explicabo repellat exercitationem! Nostrum, quasi dolores.",
        img:"https://picsum.photos/200/300/?blur=2"
    },
    {
        id:3,
        name:"yak",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis voluptatibus iste, id expedita tempore quas recusandae, totam beatae explicabo repellat exercitationem! Nostrum, quasi dolores.",
        img:"https://picsum.photos/200/300?grayscale"
    },
    {
        id:4,
        name:"dog",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis voluptatibus iste, id expedita tempore quas recusandae, totam beatae explicabo repellat exercitationem! Nostrum, quasi dolores.",
        img:"https://picsum.photos/id/237/200/300"
    },
    {
        id:5,
        name:"sky",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis voluptatibus iste, id expedita tempore quas recusandae, totam beatae explicabo repellat exercitationem! Nostrum, quasi dolores.",
        img:"https://picsum.photos/seed/picsum/200/300"
    },
    
];

const Testimonials = () => {
    var settings={
        dots:true,
        arrows:false,
        Infinite:true,
        speed :500,
        slideToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoints:10000,
                settings:{
                    slideToShow:3,
                    slideToScroll:1,
                    Infinite:true,

                },
            },
            {
                breakpoints:1024,
                settings:{
                    slideToShow:2,
                    slideToScroll:1,
                    intialSlider:2,

                },  
            },
            {
                breakpoints:640,
                settings:{
                    slideToShow:1,
                    slideToScroll:1,
                },  
            },
        ],
    };
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            <div className='max-w-[600px] text-center mb-10 mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary '>what our customers are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testomonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam praesentium nisi sapiente, commodi iusto odit eligendi facere, quia, rem voluptas!</p>
            </div>
            <div data-aos="zoom-in" >
                <Slider {...settings}>
                    {TestimonialsData.map((data)=>(
                        <div className='my-6 '>
                            <div key={data.id} className=' flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative '>
                                <div className='mb-4'>
                                    <img src={data.img} alt=""  className='rounded-full w-20 h-20'/>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs dark:text-slate-300 text-gray-500 '>
                                        {data.text}</p>
                                        <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-sharif absolute top-0 right-0'></p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials