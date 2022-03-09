import { Styles } from './style/imageViewStyle';
import { ReactComponent as Favourite } from '../../assets/img/user/favourite.svg';
import { ReactComponent as UnFavourite } from '../../assets/img/user/unfavourite.svg';

export default function ImageView({ favourited, imageList }){
    return (
        <Styles>
            <div className='image-container'>
                {/* <img className='image-viewer' src='/img/carousel/1.png' alt=''/> */}
                <div className='favourite'>
                    {favourited? <Favourite />:<UnFavourite />}
                </div>
            </div>
        </Styles>
    )
}