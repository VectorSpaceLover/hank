import { useState } from "react";
import CustomedButton from "./components/customedBtn";
import SearchBox from "./components/searchBox/index.js";
import { Styles, DialogStyles } from './style/collectionStyle';
import Dialog from '@mui/material/Dialog';
import Input from "./components/input";
import EmailInput from "./components/emailInput";
import CloseButton from "./components/closeBtn";
import TextButton from './components/txtButton';
import CollectionCard from './components/collectionCard';

import { collections } from '../../assets/config';
import { Grid } from "@mui/material";

export default function Collection(){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <Styles>
            <div className="collection-container">
                <div className="search-bar">
                    <div className="topic-txt">
                        {`Collctins (0)`}
                    </div>
                    <div className="search-action">
                        <SearchBox />
                        <CustomedButton text={"Add Collection"} onClick={handleClickOpen}/>
                    </div>
                </div>
                <div className="collection-list">
                    <Grid container spacing={3}>
                        {collections && collections.map((info, idx) => {
                            return (
                                <Grid item sm={4} xs={6} md={3} key={idx}>
                                    <CollectionCard info={info} key={idx}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
                <Dialog
                    open={open} 
                    onClose={handleClose}
                    maxWidth='md'
                    fullWidth={true}
                    PaperProps={{
                        style: {
                          borderRadius: 24,
                          overflow: 'hidden',
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                          padding: 30,
                          '@media(minWidth: 780px)' : {
                            height: 486,
                          }
                        },
                    }}
                >
                    <DialogStyles>
                        <div className="dialog-container">
                            <div className="header">
                                Create a new collection
                            </div>
                            <div className="body">
                                <div className="label">
                                    Name
                                </div>
                                <Input />
                                <div className="label">
                                    Description (optional)
                                </div>
                                <EmailInput />
                            </div>
                            <div className="footer">
                                <TextButton text={"Create Colleciton"}/>
                            </div>
                            <CloseButton handleClose={handleClose}/>
                        </div>
                    </DialogStyles>
                </Dialog>
            </div>
        </Styles>
    )
}