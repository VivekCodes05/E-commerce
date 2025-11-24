import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6'
import { FaFacebook ,FaInstagram, FaLinkedinIn,FaLocationArrow} from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'

const FooterLinks =[
    {
        title:"Homo",
        link:"/#",
    },
    {
        title:"About",
        link:"/#",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
]

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
        <div className='container'>
            <div className='grid grid-cols-3 pb-44'>
                <div className='py-8 px-4 '>
                    <h1 className='text-xl sm:text-3xl text-bold sm:text-left text-justify mb-3 flex item-center gap-1'>
                        <FiShoppingBag size="30"/>
                        Shop me
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempora tempore laboriosam magni iusto perspiciatis accusantium non doloribus laborum odio cupiditate dolorum labore asperiores. Odit id ratione aliquam impedit ut, aspernatur illo.</p>
                </div>
                <div>
                    <div className='py-8 px-4 '>
                        <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                            Important links
                        </h1>
                        <ul className='flex flex-col gap-3 '>{FooterLinks.map((link)=>(
                            <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200  ' key={link.title}>{link.title}</li>
                        ))}

                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4 '>
                    <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                            links
                        </h1>
                        <ul className='flex flex-col gap-3 '>{FooterLinks.map((link)=>(
                            <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200  ' key={link.title}>{link.title}</li>
                        ))}

                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3 mt-6 '>
                        <a href="#">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedinIn className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6 '>
                        <div className='flex items-center gap-3 '>
                            <FaMapLocationDot />
                            <p>Indore, Madhya Pradesh, Punjab</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <IoCall/>
                            <p>+91 1234 5678 90</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer