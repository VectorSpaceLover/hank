import { useState, useEffect } from 'react';
import { Styles } from "./style/homeStyle";
import { Grid } from '@mui/material';
import SearchBox from './components/searchBox';
import ItemGallery from '../../components/appCard/itemGallery';
import AppList from "../../components/appList";
import {
    allPatternItems
} from '../../assets/config';
import IndeterminateCheckbox from '../../components/checkBox';
import { ReactComponent as SearchIcon } from '../../assets/img/user/home/search.svg';
import axios from 'axios';

export default function Home(){
    const [showPatternList, setShowPatternList] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [showSearchKey, setShowSearchKey] = useState('');
    const [popularWebSites, setPopularWebsites] = useState([]);
    const [addedApps, setAddedApps] = useState([]);
    const [popularApps, setPopularApps] = useState([]);

    const searchFunction = (key) => {
        setSearchKey(key);
        setShowSearchKey(true);
    }

    const viewFullPattern = () => {
        setShowPatternList(!showPatternList);
    };

    const showKeyword = () => {
        setShowPatternList(false);
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/`)
        .then(res => {
            const { mobiles, recents, websites } = res.data;
            setPopularApps(mobiles);
            setPopularWebsites(websites);
            setAddedApps(recents);
        });
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
                <SearchBox showKeyword={showKeyword} searchFunction={searchFunction} />
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
                {/* <div className="all-patterns">
                    <ItemGallery />
                </div> */}
                {showSearchKey && 
                    <div className='keyword-container'>
                        <SearchIcon />
                        <div className='search-keyword'>{searchKey}</div>
                    </div>
                }
                <div className="all-apps">
                    <AppList title='Most popular mobile apps' data={popularApps}/>
                    <AppList title='Just added' data={addedApps}/>
                    <AppList title='Most popular websites' data={popularWebSites}/>
                </div>
            </div>
        </Styles>
    )
}