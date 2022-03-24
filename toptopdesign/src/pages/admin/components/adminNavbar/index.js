import { useState } from 'react';
import { Styles } from "./style"
import IconButton from '@mui/material/IconButton';
import {ReactComponent as DropIcon} from '../../../../assets/img/admin/drop.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar(){
    const navigate = useNavigate();
    const [anchorGift, setAnchorGift] = useState(null);
    const openGift = Boolean(anchorGift);
    const openGiftMenu = (event) => {
        setAnchorGift(event.currentTarget);
    };
    const closeGiftMenu = () => {
        setAnchorGift(null);
    };
    const signOut = () => {
        navigate('/admin/signin');
    }
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
                        onClick={openGiftMenu}
                    >
                        <DropIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorGift}
                        id="account-menu"
                        open={openGift}
                        onClose={closeGiftMenu}
                        onClick={closeGiftMenu}
                        PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            width: 286,
                            borderRadius: 4,
                            padding: '24px 23px 4px 23px',
                            '@media screen and (max-width: 600px)': {
                                width: 270,
                            },
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={signOut} disableRipple>
                            Log Out
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </Styles>
    )
}