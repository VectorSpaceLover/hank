import { Styles } from "./style"
import IconButton from '@mui/material/IconButton';
import {ReactComponent as DropIcon} from '../../../../assets/img/admin/drop.svg';

export default function AdminNavbar(){
    return (
        <Styles>
            <div className="admin-nav-container">
                <div className="user-info">
                    <img className="avatar" src='/img/fedir.png' alt=""/>
                    <div className="user-name">
                        {`Maxbert`}
                    </div>
                    <IconButton 
                        aria-label="delete"
                        className="icon-btn"
                    >
                        <DropIcon />
                    </IconButton>
                </div>
            </div>
        </Styles>
    )
}