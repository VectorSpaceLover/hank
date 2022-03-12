import React, { useEffect, useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import { ReactComponent as AddIcon } from '../../assets/img/user/collection/add.svg';


import {
    getCollectionById,
    createNewCollection,
    deleteCollectionById,
    upDateCollection,
    getAllCollection,
    getCollectionByName,
} from '../../api/collection';
import { CollectionsContext } from '../../context/collections';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const AddCollectionButton = withStyles((theme) => ({
    root: {
        marginLeft: 14,
        height: 48,
        display: 'flex',
        padding: '0px 17px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `var(--main)`,
        borderRadius: 24,
        cursor: 'pointer',
        textAlign: 'center',
        width: 177,
        textTransform: 'none',
        transition: '.3s ease',
        color: `var(--white)`,
        fontFamily: `var(--font-family-pp_telegraf-regular)`,
        fontSize: `var(--font-size-m)`,
        fontWeight: 400,
        fontStyle: `normal`,
        '&:hover': {
            opacity: '.7',
            backgroundColor: 'var(--blue-ribbon)',
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            width: 255,
            marginLeft: 0,
            padding: 0,
            marginTop: 10,
        },
        ['@media screen and (max-width: 650px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
        },
        '& .icon': {

        }
    },
  }))(Button);

const CreateCollectionButton = withStyles((theme) => ({
    root: {
        color: `var(--white)`,
        fontFamily: `var(--font-family-pp_telegraf-regular)`,
        fontSize: `var(--font-size-24)`,
        fontWeight: 400,
        fontStyle: `normal`,
        backgroundColor: `var(--black-normal)`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 53,
        width: 528,
        letterSpacing: 0,
        lineHeight: 24,
        whiteSpace: 'nowrap',
        borderRadius: 63,
        marginBottom: 50,
        textTransform: 'none',
        transition: '.3s ease',
        '&:hover': {
            opacity: '.7',
            backgroundColor: `var(--black-hover)`,
        },
        [`@media screen and (max-width: 768px)`]: {
            fontWeight: 400,
            border: `1px solid var(--purple)`,
            width: 275,
            borderRadius: 100,
          }
    },
}))(Button);

const EditButton = withStyles((theme) => ({
    root: {
        border: '1px solid var(--second)',
        color: `var(--second)`,
        fontFamily: `var(--font-family-pp_telegraf-regular)`,
        fontSize: `var(--font-size-17)`,
        fontWeight: 400,
        fontStyle: 'normal',
        height: 48,
        width: 177,
        marginLeft: 'auto',
        marginBottom: 0.78,
        display: 'flex',
        padding: '0px 15.5px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 64,
        cursor: 'pointer',
        
        [`@media screen and (max-width: 650px)`]: {
            width: '100%',
            height: 36,
            padding: 0,
        },
        [`@media screen and (max-width: 900px)`]: {
            marginRight: 0,
            marginTop: 10,
        },
        textTransform: 'none',
        transition: '.3s ease',
        '&:hover': {
            color: `var(--white)`,
            backgroundColor: `var(--second)`,
        },
    },
}))(Button);


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

    const back = () => {
        navigate(`/collection/`);
    }

    useEffect(() => {
        if(id)
            getInitialData();
    }, [id, getInitialData])

    return(
        <Styles>
            <div className="before-container">
                <div className="collection-container">
                    { viewCollection &&
                        <div className='back-btn'
                            onClick={back}
                        >
                            <img className='back-arrow' src='/img/arrowright.svg' alt='arrow' />
                            <div className='text' >Back</div>
                        </div>}
                    <div className="search-bar">
                        <div className="topic-txt">
                            <div className="collection-count">
                                {!viewCollection?`Collections (${collections.length})`:collectionName}
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
                                        <EditButton
                                            className="mr-24"
                                            onClick={openEditDlg}
                                        >
                                            Edit
                                        </EditButton>
                                        <EditButton
                                            onClick={openDeletedDlg}
                                        >
                                            Delete Collection
                                        </EditButton>
                                    </div>
                                </div>
                            ):(
                                <>
                                    <SearchBox 
                                        keyword={keyword}
                                        setKeyword={setKeyword}
                                        searchCollection={searchCollection}
                                    />
                                    <AddCollectionButton onClick={openCreatedDlg}>
                                        <AddIcon className='icon'/>
                                        <span>Add Collection</span>
                                    </AddCollectionButton>
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
                                            {64 - collectionName.length}
                                        </div>
                                    </div>
                                    <Input collectionName={collectionName} setCollectionName={setCollectionName}/>
                                    <div className="liner">
                                        <div className="label">
                                            Description (optional)
                                        </div>
                                        <div className="max-character">
                                            {150 - description.length}
                                        </div>
                                    </div>
                                    <EmailInput description={description} setDescription={setDescription}/>
                                </div>
                                <div className="footer">
                                    <CreateCollectionButton
                                        onClick={() => handleCreate(isEdited)}
                                    >
                                        {!isEdited?"Create Colleciton":"Update"}
                                    </CreateCollectionButton>
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
            </div>
        </Styles>
    )
}