import CollectionCard from '../collectionCard';
import { Grid } from "@mui/material";

import { collections } from '../../../../assets/config';

export default function AllCollections(){

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
                                idx={idx}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}