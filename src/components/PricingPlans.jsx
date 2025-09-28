import React from 'react';
import cx from 'classnames';
import Button from '../ui/Button';
import { CloseIcon, TickIcon } from '../assets/SvgComponents';

const PricingPlans = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass)} id='pricing'>
            <div className='home_container'>
                <div className='text_center'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                </div>
                <div className='pricing_flex_wrapper'>
                    {
                        content?.cardData?.map((data,key) => {
                            return (
                                <div className={cx('pricing_card',data?.isProPlan && 'is_pro_pricing_card')} key={key}>
                                    <div className='pricing_plan_type'>{data?.packageType}</div>
                                    <div className="description_variant_1">
                                        {data?.price && <span className='mrp_price'>{data?.price}</span>}
                                        {data?.offerPrice && <span className="offer_price"> {data?.offerPrice} </span>}
                                        {data?.planPeriod && <span className="plan_period">{data?.planPeriod}</span>}
                                    </div>
                                    <div className='pricing_line'/>
                                    <div className="feature_grid_wrapper">
                                        {data?.planCovertFeatures?.map((feature, innerKey) => {
                                            return (
                                                <div className="features_item_flex" key={innerKey}>
                                                    <TickIcon/>
                                                    {feature}
                                                </div>
                                            )
                                        })}
                                        {data?.planNotCovertFeatures?.map((feature, innerKey) => {
                                            return (
                                                <div className="features_item_flex" key={innerKey}>
                                                    <CloseIcon/>
                                                    {feature}
                                                </div>
                                            )
                                        })}
                                        <Button buttonStyle={'mt_3'} isSecondaryButton buttonText={data?.ctaButton}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PricingPlans