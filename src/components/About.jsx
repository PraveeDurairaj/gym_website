import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import aboutImage1 from '../../public/aboutImage1.webp';
import aboutImage2 from '../../public/aboutImage2.webp';
import aboutImage3 from '../../public/aboutImage3.webp';
import aboutImage4 from '../../public/aboutImage4.webp';
import cx from 'classnames';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'about_container')}>
            <div className='home_container'>
                <div className='about_grid'>
                    <div>
                        {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                        {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                        {content?.description2 && <p className='description_variant_1 mt_2'>{content?.description2}</p>}
                    </div>
                    <Swiper
                        navigation={true}
                        effect={'fade'}
                        modules={[EffectFade, Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        className="custom_about_swiper"
                    >
                        {[aboutImage1, aboutImage2, aboutImage3, aboutImage4]?.map((data, index) => {
                            return (
                                <SwiperSlide className='slide' key={index}>
                                    <img src={data} alt='about image' />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default About
