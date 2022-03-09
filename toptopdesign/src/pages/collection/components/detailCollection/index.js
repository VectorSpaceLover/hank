import { Grid } from "@mui/material";
import { Styles } from './style/detailCollectionStyle';
import { oneCollection } from '../../../../assets/config';
import ImageViewer from '../imageViewer';
import TextButton from './viewButton';
import { useState } from "react";

export default function DetailCollection(){
    const [images, setImages] = useState(oneCollection);

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
            <div className="collection-list">
                <Grid container spacing={3}>
                    {images && images.map((info, idx) => {
                        return (
                            <Grid 
                                item 
                                sm={4}
                                xs={6} 
                                md={3} 
                                key={idx}
                            >
                                <ImageViewer index={idx} closeItem={closeItem}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <div className="footer">
                <TextButton text={"View More"}/>
            </div>
        </Styles>
        
    )
}