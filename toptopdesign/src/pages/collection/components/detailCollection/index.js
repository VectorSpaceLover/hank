import { Grid } from "@mui/material";
import { Styles } from './style/detailCollectionStyle';
import { oneCollection, imageList } from '../../../../assets/config';
import ImageViewer from '../imageViewer';
import TextButton from './viewButton';
import { useState } from "react";

export default function DetailCollection(){
    const [images, setImages] = useState(imageList);
    console.log(images);

    const closeItem = (idx) => {
        const newImages = images.filter((item, index) => {
            if(index === idx){
                return false;
            }
            return true;
        })
        setImages(newImages);
    }

    return (
        <Styles>
            <div className="detail-collection">
                <div className="collection-list">
                    {images && images.map((info, idx) => {
                        console.log(info)
                        return <ImageViewer info={info} index={idx} closeItem={closeItem} key={idx}/>
                    })}
                </div>
            </div>
            <div className="footer">
                <TextButton text={"View More"}/>
            </div>
        </Styles>
        
    )
}