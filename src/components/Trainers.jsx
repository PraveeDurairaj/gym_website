import React from 'react';
import cx from 'classnames';

const Trainers = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'trainers_container')} >
            <div className='home_container'>
                <div className="trainers_grid">
                    <div>
                        {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                        {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                        <div className='trainers_text_data_wrapper'>
                            {content?.trainerTextData?.map((data, key) => {
                                return (
                                    <div className='trainers_text_data_item' key={key}>{data}</div>
                                )
                            })}
                        </div>
                    </div>
                    {content?.trainerImage && <img src={content?.trainerImage} className='trainers_image' alt='trainers' loading="lazy"/>}
                </div>
            </div>
        </section>
    )
}

export default Trainers