import CollectionCard from '../collectionCard';
import { Grid } from "@mui/material";
import { useState, useEffect, useContext } from 'react';

import { getAllCollection } from '../../../../api/collection';
import { CollectionsContext } from '../../../../context/collections';

const AllCollections = () => {
    const [collections, setCollections] = useContext(CollectionsContext);

    const getInitialData = async () => {
        const { collections } = await getAllCollection();
        setCollections(collections);
    }
    useEffect(() => {
        getInitialData();
    }, [])
    
    return (
        <div className="collection-list">
            <Grid container spacing={3}>
                {collections && collections.map((info, idx) => {
                    return (
                        <Grid 
                            item 
                            sm={4} 
                            xs={6} 
                            md={3} 
                            key={idx}
                        >
                            <CollectionCard 
                                info={info} 
                                key={idx}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default AllCollections;