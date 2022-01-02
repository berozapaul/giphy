import React, {useContext} from 'react';
import AppContext from '../../AppContext';

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
        <div className="gif">
            {gifs.map((item: Gif, index: string) =>
                <div key={index}>
                    <h3>{item.title}</h3>
                    <a href={item.gifUrl} target="new">
                        <img src={item.images.fixed_height_still.url}/>
                    </a>
                </div>
            )}
        </div>
   )
};
export default List;
