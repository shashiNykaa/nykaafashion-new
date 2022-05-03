import React from 'react';
import Header from './header';
import Footer from './footer';
import cs from 'classnames';


const MainLayout = ({children}) =>{
    return (
        <>
            <div className={cs('h-screen')}>
                <Header/>
                    {children}
                <Footer />
            </div>
        </>

    )
};

export default MainLayout;