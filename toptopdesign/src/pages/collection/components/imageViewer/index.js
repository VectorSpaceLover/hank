import { Styles } from "./style/imageViewerStyle";
import IconButton from '@mui/material/IconButton';
import { ReactComponent as CloseIcon } from '../../../../assets/img/user/collection/cover_close.svg';

export default function ImageViewer({index, closeItem}){

    return (
        <Styles>
            <div className="container">
                {index >= 8?(
                    <></>
                ):(
                    <>
                        <img src="/img/user/collection/collection.png" alt="" className="image" />
                        <div className="overlay">
                            <img src="/img/user/collection/collection_hover.png" alt="" className="overlay-image"/>
                            <IconButton 
                                aria-label="delete"
                                className="close-btn"
                                onClick={() => closeItem(index)}
                            >
                                <CloseIcon className="close-icon"/>
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
        </Styles>
    )
}