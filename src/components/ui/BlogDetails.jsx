'use client'
import Image from 'next/image';
import React from 'react';
import blog from '/public/images/blogdetails.png'
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const BlogDetails = () => {
    const router =useRouter()
    return (
        <div className='container mx-auto'>
        <div className='bg-[#242424] p-4 w-full rounded-lg shadow-lg my-8 '>
           <div className='flex items-center space-x-2 py-6'>
            <LeftOutlined onClick={router.back} className='text-white text-xl'/>
           <h3 className='text-[#FFFFFF] text-[22px] font-bold '>   Cozy Cabin in the Woods</h3>
           </div>
            <Image className='w-full h-[444px]' src={blog} alt='blog-1'  />
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable </p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable </p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'     >perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable </p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work and contemporary decor, it’s the ideal space for both relaxation and work.</p>
            <p className='text-lg text-[#FFFFFF] font-normal pt-4 pb-8'>perfect city escape with a sleek design and panoramic city views. Featuring a comfortable </p>
       
        </div>
    </div>
    );
};

export default BlogDetails;