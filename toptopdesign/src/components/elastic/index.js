import Carousel, { consts } from 'react-elastic-carousel'
import { Button } from 'semantic-ui-react';
import Item from "./style/itemStyle";
import './style/style.css';

export default function ElasticCarousel(){
    return (
        <div style={{padding: '43px 0px 0px 0px'}}>
            <Carousel 
                itemPadding={[0, 0]} 
                itemsToShow={1} 
                outerSpacing={70} 
                pagination={false}
            >
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
            </Carousel>
            {/* <Button onClick={}/> */}
        </div>
        
    )
}