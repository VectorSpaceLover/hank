import { useState, useContext, useEffect } from 'react';
import { Styles, ViewCollectionDlgStyle, DialogStyles } from './style/imageViewStyle';
import { ReactComponent as Favourite } from '../../assets/img/user/favourite.svg';
import { ReactComponent as UnFavourite } from '../../assets/img/user/unfavourite.svg';
import IconButton from '@mui/material/IconButton';
import CloseButton from './closeBtn';
import Dialog from '@mui/material/Dialog';
import SearchInput from './input';
import Collection from './colllections';
import { CollectionsContext } from '../../context/collections';
import {
    getAllCollection,
    getCollectionByName,
} from '../../api/collection';
import CreateButton from './txtButton';
import EmailInput from '../../pages/collection/components/emailInput';
import { useNavigate } from "react-router-dom";
import {
    createNewCollection
} from '../../api/collection';
import Input from '../../pages/collection/components/input';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

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
            width: 306,
            borderRadius: 100,
          }
    },
}))(Button);

const GoButton = withStyles((theme) => ({
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
        marginTop: 8,
        border: `1px solid var(--purple)`,
        textTransform: 'none',
        transition: '.3s ease',
        '&:hover': {
            opacity: '.7',
            backgroundColor: `var(--black-hover)`,
        },
        [`@media screen and (max-width: 768px)`]: {
            fontWeight: 400,
            width: 306,
            borderRadius: 100,
        },
        [`@media screen and (max-width: 600px)`]: {
            width: 306,
        }
    },
}))(Button);


export default function ImageView({ favourited, imageList }){
    const navigate = useNavigate();

    const [collections, setCollections] = useContext(CollectionsContext);
    const [searchedCollections, setSearchedCollections] = useState([]);
    const [keyword, setKeyword] = useState('');
    
    const [collectionOpen, setCollectionOpen] = useState(false);
    const [createdOpen, setCreatedOpen] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    const [description, setDescription] = useState('');

    const [selectedId, setSelectedId] = useState('');

    const [goTxt, setGoTxt] = useState("Let’s go!");

    const viewCollections = () => {
        setCollectionOpen(true);
    }

    const closeViewCollectionsDlg = () => {
        setCollectionOpen(false);
    };

    const getInitialData = async () => {
        const { collections } = await getAllCollection();
        setCollections(collections);
        setSearchedCollections(collections);
    }

    const openNewCollection = () => {
        closeViewCollectionsDlg();
        setCreatedOpen(true);
    }

    const closeCreatedDlg = () => {
        setCreatedOpen(false);
    };

    const handleCreate = async () => {
        await createNewCollection(collectionName, description);
        const { collections } = await getAllCollection();
        setCollections(collections);
        closeCreatedDlg();
        setCollectionName('');
        setDescription('');
        navigate(`/collection`);
    }

    const searchCollection = async () => {
        const { searchResults } = await getCollectionByName(keyword);
        setSearchedCollections(searchResults);
    }

    const gotoFunc = async() => {
        if(selectedId !== ''){
            setGoTxt("Successfully Added!");
            const changeTxt = () => {
                setGoTxt("Let’s go!");
            }
            await setTimeout(changeTxt, 3000);
        }
    }
    
    useEffect(() => {
        getInitialData();
    }, [])
    
    return (
        <Styles>
            <div className='image-container'>
                <div className='favourite'>
                    {favourited?
                        <IconButton 
                            aria-label="delete"
                            onClick={viewCollections}
                        >
                            <Favourite className='icon' />
                        </IconButton>:
                        <IconButton 
                            aria-label="delete"
                            onClick={viewCollections}
                        >
                            <UnFavourite className='icon' />
                        </IconButton>}
                </div>
                <Dialog
                    open={collectionOpen} 
                    onClose={closeViewCollectionsDlg}
                    maxWidth='md'
                    fullWidth={true}
                    PaperProps={{
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 24,
                            overflowY: 'auto',
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
                    <ViewCollectionDlgStyle>
                        <div className='dialog-container'>
                            <SearchInput 
                                setKeyword={setKeyword} 
                                keyword={keyword}
                                searchCollection={searchCollection}
                            />
                            {searchedCollections && searchedCollections.map((item, idx) => {
                                return <Collection 
                                            info={item} 
                                            key={idx}
                                            selectedId={selectedId}
                                            setSelectedId={setSelectedId}
                                        />
                            })}
                            <CreateButton text={"Create New Collection"} onClick={openNewCollection}/>
                            <div className='footer'>
                                <GoButton onClick={gotoFunc}>
                                    {goTxt}
                                </GoButton>
                            </div>
                            
                        </div>
                        <CloseButton handleClose={closeViewCollectionsDlg}/>
                    </ViewCollectionDlgStyle>
                </Dialog>
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
                                Create a new collection
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
                                <Input 
                                    collectionName={collectionName} 
                                    setCollectionName={setCollectionName} 
                                />
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
                                    onClick={() => handleCreate()}
                                >
                                    Create Colleciton
                                </CreateCollectionButton>
                            </div>
                            <CloseButton handleClose={closeCreatedDlg}/>
                        </div>
                    </DialogStyles>
                </Dialog>
            </div>
        </Styles>
    )
}