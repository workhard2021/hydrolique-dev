/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        domains:["www.owlguru.com","cdn.ca.emap.com","media.istockphoto.com"]
    },
    env:{
        NEXT_PUBLIC_EMAIL: 'oyster@gmail.com',
        NEXT_PUBLIC_TEL: '+212-6 61 05 02 28',
        NEXT_PUBLIC_ADDRESS: '123 Anywhere St., Any City',
    }
};

export default nextConfig;
