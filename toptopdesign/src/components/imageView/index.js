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
import GoButton from './goButton';
import TextButton from '../../pages/collection/components/txtButton';
import EmailInput from '../../pages/collection/components/emailInput';
import { useNavigate } from "react-router-dom";
import {
    createNewCollection
} from '../../api/collection';
import Input from '../../pages/collection/components/input';

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
                {/* <img className='image-viewer' src='/img/carousel/1.png' alt=''/> */}
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
                            <GoButton text={goTxt} onClick={gotoFunc}/>
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
                                        64
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
                                        150
                                    </div>
                                </div>
                                <EmailInput description={description} setDescription={setDescription}/>
                            </div>
                            <div className="footer">
                                <TextButton text={"Create Colleciton"} onClick={() => handleCreate()}/>
                            </div>
                            <CloseButton handleClose={closeCreatedDlg}/>
                        </div>
                    </DialogStyles>
                </Dialog>
            </div>
        </Styles>
    )
}