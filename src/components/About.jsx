import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import cx from 'classnames';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { about1, about2, about3, about4 } from '../helper/getStaticImages';

const About = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'about_container')} id='about'>
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
                        {[about1, about2, about3, about4]?.map((data, index) => {
                            return (
                                <SwiperSlide className='slide' key={index}>
                                    <img src={data} alt='about image' loading="lazy" />
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
