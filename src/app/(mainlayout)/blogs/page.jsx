import BlogCard from '@/components/ui/BlogCard';
import React from 'react';
import blogimg from '/public/images/blog.png'
const page = () => {


 const blogsdata= [
        {
          "id": 1,
          "title": "Our rooms are incredible",
          "image": blogimg,
          "description": "Surrounded by nature, this cozy cabin provides a peaceful retreat with a rustic charm. A warm fireplace and a king-sized bed make this room perfect for a quiet, comfortable stay away from the hustle of the city.",
          "buttonText": "Read more"
        },
        {
          "id": 2,
          "title": "Luxury Suite with Ocean View",
          "image": blogimg,
          "description": "Enjoy breathtaking ocean views from the comfort of your room, complete with a luxurious queen-sized bed and a private balcony. The suite includes a cozy seating area, perfect for unwinding after a long day.",
          "buttonText": "Read more"
        },
        {
          "id": 3,
          "title": "Modern Urban Escape",
          "image": blogimg,
          "description": "This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.",
          "buttonText": "Read more"
        },
        {
          "id": 4,
          "title": "Cozy Cabin in the Woods",
          "image": blogimg,
          "description": "Surrounded by nature, this cozy cabin provides a peaceful retreat with a rustic charm. A warm fireplace and a king-sized bed make this room perfect for a quiet, comfortable stay away from the hustle of the city.",
          "buttonText": "Read more"
        },
        {
          "id": 5,
          "title": "Modern Urban Escape",
          "image": blogimg,
          "description": "This modern room offers the perfect city escape with a sleek design and panoramic city views. Featuring a comfortable double bed and contemporary decor, it’s the ideal space for both relaxation and work.",
          "buttonText": "Read more"
        },
        {
          "id": 6,
          "title": "Cozy Cabin in the Woods",
          "image": blogimg,
          "description": "Surrounded by nature, this cozy cabin provides a peaceful retreat with a rustic charm. A warm fireplace and a king-sized bed make this room perfect for a quiet, comfortable stay away from the hustle of the city.",
          "buttonText": "Read more"
        }
      ]
      
    return (
        <div className='container mx-auto p-4'>
          <h1 className='text-[#FFFFFF] text-[48px] font-normal mb-10'>Here you see blogs part of  Apaartali service...</h1>
            <div className='  gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-12 '>
                {
                    blogsdata.map(blog => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default page;