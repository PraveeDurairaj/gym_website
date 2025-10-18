import React, { useState } from 'react';
import { Drawer, Link } from '@mui/material';
import Button from '../ui/Button';
import { MenuIcon } from '../assets/SvgComponents';

const HomeHeader = ({ content }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const renterMenus = (isMobile) => {
        return (
            <>
                <nav className='heder_nav_container' onClick={isMobile && toggleDrawer(false)} >
                    {content?.navigationMenus?.map((nav, key) => {
                        return (
                            <Link href={nav?.link} key={key}>{nav?.text}</Link>
                        )
                    })}

                </nav>
            </>

        )
    }
    return (
        <header className='home_header_container glass-card'>
            <div className='brand_logo_container'>
                <img src={content?.brandLogo} alt='brand_logo' />
            </div>
            <div className='web_navigation'>
                {renterMenus()}
            </div>
            <Button buttonStyle={'web_cta_button'} buttonText={content?.contactButton} />
            <div className={'mobile_navigation'} onClick={toggleDrawer(true)}> <MenuIcon /> </div>
            <Drawer open={open} onClose={toggleDrawer(false)} className='home_header_drawer'>
                {renterMenus(true)}
                <Button buttonStyle={'mobileCtaButton'} buttonText={content?.contactButton} />
            </Drawer>
        </header>
    )
}

export default HomeHeader