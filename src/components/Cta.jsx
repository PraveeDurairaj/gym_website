import React from 'react';
import cx from 'classnames';
import Button from '../ui/Button';

const Cta = ({ containerClass, content }) => {
    return (
        <section className='cta_container_wrapper' id='contact'>
            <div className={cx('home_container', containerClass)}>
                <div className='cta_container'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                    <div className='flex_button_wrapper flex_Center mt_3'>
                        <Button buttonText={content?.secondaryButton} isSecondaryButton buttonType={'link'} navigationPath={content?.secondaryButtonLink} />
                        <Button buttonText={content?.primaryButton} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta