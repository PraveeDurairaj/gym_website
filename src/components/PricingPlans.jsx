import React from 'react';
import cx from 'classnames';

const PricingPlans = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, '')}>
            <div className='home_container'>
                <div className='text_center'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                </div>
            </div>
        </section>
    )
}

export default PricingPlans