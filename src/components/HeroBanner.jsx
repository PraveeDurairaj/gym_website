import React from 'react';
import Button from '../ui/Button';

const HeroBanner = ({ containerClass, content }) => {
    return (
        <section className={containerClass}>
            <div className='home_container'>
                <div className='home_banner_grid'>
                    <div>
                        {content?.title && <h1 className='title_h1'>{content?.title}</h1>}
                        {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                        <div className='flex_button_wrapper mt_3'>
                            <Button buttonText={content?.primaryButton} />
                            <Button buttonText={content?.secoundryButton} isSecoundryButton />
                        </div>
                    </div>
                    <div className='home_banner_image_Wrapper'>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroBanner
