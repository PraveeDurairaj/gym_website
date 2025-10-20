import React, { useContext } from 'react';
import cx from 'classnames';
import Button from '../ui/Button';
import { FormContext } from '../helper/FormContent';
import { TickIcon } from '../assets/SvgComponents';


const HeroBanner = ({ containerClass, content, isBannerLayout = true }) => {
    const { handleModalShow } = useContext(FormContext);
    return (
        isBannerLayout ? <section className={cx(containerClass, 'home_banner_layout_container')}>
            <div className='home_container'>
                <div className='banner_layout_content_Wrapper'>
                    <div className='description_variant_2 mb_2 why_choose_card_Wrapper'>
                        {['Export trainers', '200+ Equipments', '24 Hours availability']?.map((item, key) => {
                            return (
                                <div className='why_choose_card' key={key}>
                                    <TickIcon className={'banner_tick_icon'}/>
                                    <span>{item}</span>
                                </div>)
                        })}
                    </div>
                    {content?.title && <h1 className='title_h1'>{content?.title}</h1>}
                    {content?.description && <p className='description_variant_1 mt_3'>{content?.description}</p>}
                    <div className='flex_button_wrapper mt_4'>
                        <Button buttonText={content?.secondaryButton} isSecondaryButton buttonType={'link'} navigationPath={content?.secondaryButtonLink} />
                        <Button buttonText={content?.primaryButton} buttonAction={handleModalShow} />
                    </div>
                </div>
            </div>
        </section> :
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
                        <div className='home_banner_image_Wrapper' />
                    </div>

                </div>
            </section>
    )
}

export default HeroBanner
