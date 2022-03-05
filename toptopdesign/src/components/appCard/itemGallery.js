import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ArrowButton from './arrowButton';
import { Styles } from './style/itemGalleryStyle.js';
import { allPatternItems } from '../../assets/config';

export default function ItemGallery(){
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
      <Styles>
        <div className='item-gallery'>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={allPatternItems.length - 5}
                gutter={20}
                leftChevron={
                    <ArrowButton />
                }
                rightChevron={
                    <ArrowButton />
                }
                outsideChevron
                chevronWidth={chevronWidth}
                className='item-group'
            >
                {allPatternItems.map((item, idx) => {
                    return (<div className='item' key={idx}>
                        {item.name}
                    </div>)
                })}
            </ItemsCarousel>
        </div>
      </Styles>
    
  );
};