import React, { useContext } from 'react';
import { FormContext } from '../helper/FormContent';
import cx from 'classnames';
import Button from '../ui/Button';

const Cta = ({ containerClass, content }) => {
    const { handleModalShow } = useContext(FormContext);
    return (
        <section className='cta_container_wrapper' id='contact'>
            <div className={cx('home_container', containerClass)}>
                <div className='cta_container'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                    <div className='flex_button_wrapper flex_Center mt_3'>
                        <Button buttonText={content?.secondaryButton} isSecondaryButton buttonAction={content?.isModal && handleModalShow} />
                        <Button buttonText={content?.primaryButton} buttonType={'link'} navigationPath={content?.primaryButtonLink} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta