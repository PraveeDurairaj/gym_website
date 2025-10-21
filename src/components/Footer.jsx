import React from 'react';
import cx from 'classnames';
import { Link } from '@mui/material';

const Footer = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'footer_container')}>
            <div className='home_container'>
                <div className='footer_grid_wrapper'>
                    <div className="brand_logo_description_container">
                        {content?.brandLogo && <img src={content?.brandLogo} alt='brand_logo' className='mb_2' loading="lazy" />}
                        {content?.brandDescription && <p className='description_variant_2 footer_brand_description'>{content?.brandDescription}</p>}
                    </div>
                    {content?.navigationLinks?.map((list,index) => {
                        return (
                            <div key={index}>
                                <p className='description_variant_1 mb_2'>{list?.title}</p>
                                <div className={list?.linkContainerStyle ?? "footer_link_container"}>
                                    {list?.links?.map((item, key) => {
                                        const Icon = item?.icon
                                        return (
                                            <Link href={item?.link} key={key} aria-label={item?.icon && 'social link icons'}>{item?.text ? <>{item?.text}</> : <Icon />}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Footer