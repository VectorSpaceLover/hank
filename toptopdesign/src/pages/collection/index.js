import React, { useEffect, useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomedButton from "./components/customedBtn";
import SearchBox from "./components/searchBox/index.js";
import { 
    Styles, 
    DialogStyles, 
    DeleteDlgStyle 
} from './style/collectionStyle';
import Dialog from '@mui/material/Dialog';
import Input from "./components/input";
import EmailInput from "./components/emailInput";
import CloseButton from "./components/closeBtn";
import TextButton from './components/txtButton';

import IconButton from '@mui/material/IconButton';

import { ReactComponent as FacebookIcon } from '../../assets/img/user/collection/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/user/collection/twitter.svg';
import { ReactComponent as DiscordIcon } from '../../assets/img/user/collection/discord.svg';
import { ReactComponent as LinkIcon } from '../../assets/img/user/collection/link.svg';
import { ReactComponent as DeleteImg } from '../../assets/img/user/collection/delete.svg';

import {
    getCollectionById,
    createNewCollection,
    deleteCollectionById,
    upDateCollection,
    getAllCollection,
    getCollectionByName,
} from '../../api/collection';
import { CollectionsContext } from '../../context/collections';

export default function Collection({children}){
    const [collections, setCollections] = useContext(CollectionsContext);
    const [keyword, setKeyword] = useState('');

    const [createdOpen, setCreatedOpen] = useState(false);
    const [deletedOpen, setDeletedOpen] = useState(false);
    const [viewCollection, setViewCollection] = useState(false);
    const { id } = useParams();
    const [isEdited, SetEdited] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    const [description, setDescription] = useState('');
    const [colDes, setColDes] = useState('');

    const navigate = useNavigate()

    const openCreatedDlg = () => {
        setCollectionName('');
        setDescription('');
        setCreatedOpen(true);
    };

    const openDeletedDlg = () => {
        setDeletedOpen(true);
    };

    const closeCreatedDlg = () => {
        setCreatedOpen(false);
        SetEdited(false);
    };

    const closeDeletedDlg = () => {
        setDeletedOpen(false);
    };

    const openEditDlg = () => {
        SetEdited(true);
        setCreatedOpen(true);
    }

    const searchCollection = async () => {
        const { searchResults } = await getCollectionByName(keyword);
        setCollections(searchResults);
    }

    useEffect(() => {
        if(id !== undefined && id !== null){
            setViewCollection(true);
        }else{
            setViewCollection(false);
        }
    }, [id]);

    const getInitialData = useCallback( async() => {
        const { collection } = await getCollectionById(id);
        setColDes(collection[0].description);
        setDescription(collection[0].description);
        setCollectionName(collection[0].collectionName);
    }, [id])

    const handleCreate = async (isEdited) => {
        if(!isEdited){
            await createNewCollection(collectionName, description);
            setCollectionName('');
            setDescription('');
        }else{
            await upDateCollection(id, collectionName, description);
            setColDes(description);
            setDescription(description);
        }
        const { collections } = await getAllCollection();
        setCollections(collections);
        closeCreatedDlg();
    }

    const handleDelete = async() => {
        deleteCollectionById(id);
        closeDeletedDlg();
        navigate(`/collection/`);
        const { collections } = await getAllCollection();
        setCollections(collections);
    }

    useEffect(() => {
        if(id)
            getInitialData();
    }, [id, getInitialData])

    return(
        <Styles>
            <div className="collection-container">
                <div className="search-bar">
                    <div className="topic-txt">
                        <div className="collection-count">
                            {`Collections (${collections.length})`}
                        </div>
                        {viewCollection && 
                            <div className="collection-des">
                                {colDes}
                            </div>
                        }
                    </div>
                    <div className="search-action">
                        {viewCollection?(
                            <div className="action-group">
                                <div className="social-group">
                                    <IconButton 
                                        aria-label="delete"
                                    >
                                        <FacebookIcon className='icon alarm' />
                                    </IconButton>
                                    <IconButton 
                                        aria-label="delete"
                                    >
                                        <TwitterIcon className='icon alarm' />
                                    </IconButton>
                                    <IconButton 
                                        aria-label="delete"
                                    >
                                        <DiscordIcon className='icon alarm' />
                                    </IconButton>
                                    <IconButton 
                                        aria-label="delete"
                                    >
                                        <LinkIcon className='icon alarm' />
                                    </IconButton>
                                </div>
                                <div className="btn-group">
                                    <div 
                                        className='small-btn-outline mr-24'
                                        onClick={openEditDlg}
                                    >
                                        Edit
                                    </div>
                                    <div 
                                        className='small-btn-outline'
                                        onClick={openDeletedDlg}
                                    >
                                        Delete Collection
                                    </div>
                                </div>
                            </div>
                        ):(
                            <>
                                <SearchBox 
                                    keyword={keyword}
                                    setKeyword={setKeyword}
                                    searchCollection={searchCollection}
                                />
                                <CustomedButton text={"Add Collection"} onClick={openCreatedDlg}/>
                            </>
                        )}
                    </div>
                    
                </div>
                {children && children}
                <Dialog
                    open={createdOpen} 
                    onClose={closeCreatedDlg}
                    maxWidth='md'
                    fullWidth={true}
                    PaperProps={{
                        style: {
                            display: 'flex',
                            alignItems: 'center',
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
                                {!isEdited?<>Create a new collection</>:<>Edit collection</>}
                            </div>
                            <div className="body">
                                <div className="liner">
                                    <div className="label">
                                        Name
                                    </div>
                                    <div className="max-character">
                                        64
                                    </div>
                                </div>
                                <Input collectionName={collectionName} setCollectionName={setCollectionName}/>
                                <div className="liner">
                                    <div className="label">
                                        Description (optional)
                                    </div>
                                    <div className="max-character">
                                        150
                                    </div>
                                </div>
                                <EmailInput description={description} setDescription={setDescription}/>
                            </div>
                            <div className="footer">
                                <TextButton text={!isEdited?"Create Colleciton":"Update"} onClick={() => handleCreate(isEdited)}/>
                            </div>
                            <CloseButton handleClose={closeCreatedDlg}/>
                        </div>
                    </DialogStyles>
                </Dialog>

                <Dialog
                    open={deletedOpen} 
                    onClose={closeDeletedDlg}
                    maxWidth='md'
                    fullWidth={true}
                    PaperProps={{
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 24,
                            overflow: 'hidden',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            padding: 30,
                            height: 636,
                            '@media(minWidth: 780px)' : {
                            height: 486,
                            }
                        },
                    }}
                >
                    <DeleteDlgStyle>
                        <div className="dialog-container">
                            <div className="header">
                                Delete collection!
                            </div>
                            <div className="body">
                                <div className="des-txt">
                                    Are you sure you want to delete this collection? This process is irreversible even customer support can’t help you either. 
                                </div>
                                <div className="picture">
                                    <DeleteImg />
                                </div>
                            </div>
                            <div className="footer">
                                <TextButton text={"Yes I’m sure"} onClick={() => handleDelete()}/>
                            </div>
                            <CloseButton handleClose={closeDeletedDlg}/>
                        </div>
                    </DeleteDlgStyle>
                </Dialog>
            </div>
        </Styles>
    )
}