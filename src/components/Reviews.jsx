import React, { useState } from 'react';
import cx from 'classnames';
import Button from '../ui/Button';

const ReviewCard = ({ data }) => {
    return (
        <div className='review_card'>
            <div className="avatar_wrapper" >
                <div className="avatar" style={{ background: `url(${data?.logo})` }} />
                <div className='client_name_and_date_wrapper'>
                    <div className="description_variant_1 font_500"> {data?.name}</div>
                    {data?.reviewDate && <div className="reviewed_date description_variant_3">{data?.reviewDate}</div>}
                </div>
            </div>
            {data?.rating && <div className="rating_Wrapper"></div>}
            <div className="review_message description_variant_2"> {data?.reviewMessage}</div>
        </div>
    )
}

const Reviews = ({ containerClass, content }) => {
    const [show, setShow] = useState(false)
    return (
        <section className={cx(containerClass, 'review_container')} id='reviews'>
            <div className='home_container'>
                <div className='text_center'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                </div>
                <div className="review_card_wrapper">
                    {
                        content?.reviewCardData?.map((item, index) => {
                            return (
                                <ReviewCard data={item} key={index} />
                            )
                        })
                    }
                    {
                        show && content?.reviewRestArrayCardData?.map((item, index) => {
                            return (
                                <ReviewCard data={item} key={index} />
                            )
                        })
                    }
                </div>
                <div className='show_more_container'>
                    <Button buttonStyle={'mt_5'} isSecondaryButton buttonAction={() => setShow(!show)} buttonText={show ? 'Show less' : 'Show more'} />
                </div>
            </div>
        </section>
    )
}

export default Reviews