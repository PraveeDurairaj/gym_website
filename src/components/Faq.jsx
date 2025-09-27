import React from 'react'
import cx from 'classnames';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { AccordionArrow } from '../assets/SvgComponents'

const Faq = ({ containerClass, content }) => {
    return (
        <section className={cx(containerClass, 'faq_container')}>
            <div className='home_container'>
                <div className='text_center'>
                    {content?.title && <h2 className='title_h2'>{content?.title}</h2>}
                    {content?.description && <p className='description_variant_1 mt_2'>{content?.description}</p>}
                </div>

                <div className='faq_item_grid_wrapper'>
                    {content?.faqListData?.map((data, key) => {
                        return (
                            <Accordion key={key} disableGutters square className='custom_faq_accordion' >
                                <AccordionSummary
                                    expandIcon={<AccordionArrow />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className='description_variant_1 font_500'

                                >
                                    {data?.question}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {data?.answer?.normalDescription && <div className={'faq_description_container mb_1'}>
                                        {data?.answer?.normalDescription?.map((description, dkey) => {
                                            return (
                                                <p className='description_variant_2' key={dkey}>{description}</p>
                                            )
                                        })}

                                    </div>}
                                    {data?.answer?.descriptionWidthBold &&
                                        <p className='description_variant_2 mb_1'>{data?.answer?.descriptionWidthBold?.beforeText}
                                            {data?.answer?.descriptionWidthBold?.BoldText && <span className='font_500'> {data?.answer?.descriptionWidthBold?.BoldText} </span>}
                                            {data?.answer?.descriptionWidthBold?.afterText}</p>}
                                    {data?.answer?.dotList && <div className='faq_list-wrapper'>
                                        {data?.answer?.dotList?.map((list, key) => {
                                            return (
                                                <li key={key} className='faq_list_item'>{list}</li>
                                            )
                                        })}
                                    </div>}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Faq