import React from 'react';

const Amenities = ({ containerClass, content }) => {
    return (
        <section className={containerClass}>
            <div className='home_container'>
                {content?.title && <h2 className='title_h2 title_h2_space_bottom'>{content?.title}</h2>}
                <div className='amenites_card_grid'>
                    {content?.aminitesCardData?.map((data) => {
                        const Icon = data?.icon;
                        return (
                            <div className='amenites_card'>
                                <Icon />
                                <div>
                                    <h3 className='description_varient_1 font_600  mb_1'>{data?.cardTitle}</h3>
                                    <p className='description_varient_2'>{data?.cardDescription}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Amenities
