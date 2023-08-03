import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton, AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'
import './Services.css' 
import hero from '../../images/hero.png'
import data from '../../utils/accordion'
import service from '../../images/service.jpg'

const Services = () => {
  return (
    <section className="s-wrapper" id='Services'>
      <div className='s-container'>
        <div className="s-left">
          <div className="img-container">
            <img src={service}/>
          </div>
        </div>
        <div className="s-right">
          <span className='primary'>Our Services</span>
          <span>To our Valuable Clients</span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {data.map((item,i)=>{
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [className,setClassName] = useState(null);
              return(
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordionButton'>
                      <AccordionItemState>
                        {({expanded})=> expanded ? setClassName("expanded"):setClassName("collapsed")}
                      </AccordionItemState>
                      <div className="icon">
                        {item.icon}
                      </div>
                      <span className="icon-heading">
                        {item.heading}
                      </span>
                      <div className="icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='detail'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Services
