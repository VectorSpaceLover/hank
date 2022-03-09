import { useState, useEffect } from 'react';
import { Styles } from "./style/homeStyle";
import { Grid } from '@mui/material';
import SearchBox from './components/searchBox';
import AppList from "../../components/appList";
import {
    allPatternItems
} from '../../assets/config';
import IndeterminateCheckbox from '../../components/checkBox';
import { ReactComponent as SearchIcon } from '../../assets/img/user/home/search.svg';
import ImageView from '../../components/imageView';
import TxtButton from '../../components/txtButton';
import Footer from '../../components/footer';
import { getAllProducts, getSearchResults } from '../../api/collection';

export default function Home(){
    const [showPatternList, setShowPatternList] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [showSearchKey, setShowSearchKey] = useState('');
    const [showKeywordList, setShowKeywordList] = useState(false);
    const [popularWebSites, setPopularWebsites] = useState([]);
    const [addedApps, setAddedApps] = useState([]);
    const [popularApps, setPopularApps] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const searchFunction = async (key) => {
        setShowKeywordList(false);
        setSearchKey(key);
        if(key === '')
            setShowSearchKey(false);
        else
        {
            setShowSearchKey(true);
            const res = await getSearchResults(key);
            if(res.data && res.data.searchResults && res.data.searchResults.length > 1)
                setSearchResults(res.data.searchResults);
            else
                setSearchResults([]);
        }
    }

    const viewFullPattern = () => {
        setShowPatternList(!showPatternList);
    };

    const showKeyword = () => {
        setShowPatternList(false);
    }

    useEffect(() => {
        async function getInitialData(){
            const { mobiles, recents, websites } = await getAllProducts();
            setPopularApps(mobiles);
            setPopularWebsites(websites);
            setAddedApps(recents);
        }
        getInitialData();
    }, []);

    return (
        <Styles>
            <div className='home-container'>
                <Grid container>
                    <Grid item sm={8} xs={12}>
                        <div className="topic-txt">
                            Faster, Smarter, Nicer design with Top Top Design.
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12} className='xs-hide'>
                        <div className="des-group">
                            <div className="des-item">
                                <img className="des-img" src="/img/user/home/thech-peeps-link.png" alt=""/>
                                <div>
                                    <div className="des-txt">Need more design works?</div>
                                    <div className="des-color-txt">Check out our job board</div>
                                </div>
                            </div>
                            <div className="des-item">
                                <img className="des-img" src="/img/user/home/thech-peeps-learning.png" alt=""/>
                                <div>
                                    <div className="des-txt">Collect your inspirations</div>
                                    <div className="des-color-txt">Access your collections</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <SearchBox 
                    setShowKeywordList={setShowKeywordList}
                    showKeywordList={showKeywordList} 
                    showKeyword={showKeyword} 
                    searchFunction={searchFunction} 
                />
                <div className="center-container">
                    <div 
                        className="view-full"
                        onClick={() => viewFullPattern()}
                    >
                        View full pattern list
                    </div>
                    {showPatternList && 
                        <div className="pattern-container">
                            <Grid container spacing={3}>
                                {allPatternItems && allPatternItems.map((info, idx) => {
                                    return (
                                        <Grid item sm={3} xs={6} md={2} key={idx}>
                                            <IndeterminateCheckbox info={info}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    }
                </div>
                {showSearchKey && 
                    <div className='keyword-container'>
                        <SearchIcon />
                        <div className='search-keyword'>{searchKey}</div>
                    </div>
                }
                {(searchResults && showSearchKey)&&(
                    <>
                        <div className="all-searched-app">
                            <div className="app-list">
                                <Grid container spacing={3}>
                                    {searchResults.map((info, idx) => {
                                        return (
                                            <Grid item sm={6} xs={12} md={3} key={idx}>
                                                <ImageView info={info}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        </div>
                        {searchResults.length && 
                            <div className='center-mode'>
                                <TxtButton text={"More"}/>
                            </div>
                        }
                    </>
                )}
            </div>
            { !(searchResults && searchKey) &&
                <div className='all-app-container'>
                    <div className="all-apps">
                        <AppList title='Most popular mobile apps' data={popularApps}/>
                        <AppList title='Just added' data={addedApps}/>
                        <AppList title='Most popular websites' data={popularWebSites}/>
                    </div>
                </div>
            }
            <Footer />
        </Styles>
    )
}