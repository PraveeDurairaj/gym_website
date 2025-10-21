import React from 'react';
import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Services = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'service_container')} id='services'>
            <div className='home_container'>
                {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                <div>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="custom_service_swiper mt_5"
                        slidesPerView={3}
                        spaceBetween={30}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {content?.cardData?.map((data, index) => {
                            return (
                                <SwiperSlide className='slide' key={index}>
                                    <div className='services_card'>
                                        <img src={data?.image} alt={data?.title} loading="lazy"/>
                                        <div className='services_content_wrapper'>
                                            <p className='description_variant_1 mb_1 font_600'>{data?.title}</p>
                                            <p className='description_variant_3'>{data?.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Services