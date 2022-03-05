import ImageGallery from "./imageGallery";
import { Styles } from './style/appCardStyle';
export default function AppCard({info}){
    return (
        <Styles>
            <div className="app-card">
                <div className="card-header">
                    <div className="circle"></div>
                    <div className="card-body">
                        <div className="app-name">
                            {info.name}
                        </div>
                        <div className="sub-name">
                            {info.subName}
                        </div>
                    </div>
                </div>
                <ImageGallery />
            </div>
        </Styles>
    );
}