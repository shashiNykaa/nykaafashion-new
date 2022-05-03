import React from 'react';
import cs from 'classnames';


const Footer = () =>{
    return (
        <>
        <footer className={cs('p-4',  'bg-nykaaPink', 'md:justify-between', 'md:p-2', 'sticky', 'top-[100vh]')}>
            <div className={cs('w-100', 'text-center', 'text-white')}>
                2019 - 2022 Nykaa Fashion Pvt. Ltd. All Rights Reserved
            </div>
        </footer>
        </>

    )
};

export default Footer;