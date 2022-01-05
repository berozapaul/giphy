import React, {useContext} from 'react';
import AppContext from '../../AppContext';
// import {Card} from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/*
 * Purpose: The purpose of this component is to render list of gifs.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const List = () => {
    const context = useContext(AppContext);

    const { gifs } = context;
    return(
        <div>
            <Stack spacing={2}>
                <Pagination count={gifs.length/10} />
            </Stack>
            {/*{gifs.map((item: Gif, index: string) =>*/}
            {/*    <Card key={index} variant="outlined">*/}
            {/*        <h3>{item.title}</h3>*/}
            {/*        <a href={item.gifUrl} target="new">*/}
            {/*            <img src={item.images.fixed_height_still.url}/>*/}
            {/*        </a>*/}
            {/*    </Card>*/}
            {/*)}*/}
        </div>
   )
};
export default List;
