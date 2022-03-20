import { adminbanner } from '../../../assets/config';
import BannerItem from './components/banner/bannerItem';
import { Styles } from './style';

export default function OverView(){
    return (
        <Styles>
            <div className='header'>
                <div className='welcom'>
                    Welcome back, Max
                </div>
                <div className='sort'>

                </div>
            </div>
            <div className='banner'>
                {adminbanner.map((item, idx) => {
                    return (
                        <BannerItem info={item} key={idx}/>
                    )
                })}
            </div>
            
            
        </Styles>
    )
}