import React, { useContext } from 'react';
import cx from 'classnames';
import Button from '../ui/Button';
import { FormContext } from '../helper/FormContent';


const HeroBanner = ({ containerClass, content }) => {
    const { handleModalShow } = useContext(FormContext);
    return (
        <section className={cx(containerClass, 'home_banner_container')}>
            <div className='home_container'>
                <div className='home_banner_grid'>
                    <div>
                        {content?.title && <h1 className='title_h1'>{content?.title}</h1>}
                        {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                        <div className='flex_button_wrapper mt_3'>
                            <Button buttonText={content?.secondaryButton} isSecondaryButton buttonType={'link'} navigationPath={content?.secondaryButtonLink} />
                            <Button buttonText={content?.primaryButton} buttonAction={handleModalShow} />
                        </div>
                    </div>
                    <div className='home_banner_image_Wrapper'/>
                </div>

            </div>
        </section>
    )
}

export default HeroBanner
