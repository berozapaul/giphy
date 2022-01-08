import React, { useContext, useState } from 'react';
import { Dialog, DialogContent } from "@material-ui/core";
import AppContext from '../../AppContext';
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";

/*
 * Purpose: The purpose of this component is to render list of gifs.
 *
 * Version: 1.0
 * Author: dev@example.com
 */


const useStyles = makeStyles({
    grid: {
        display: "flex",
        flexDirection: "column-reverse"
    }
});

const List = () => {
    const context = useContext(AppContext);
    const classes = useStyles();
    const { gifs } = context;

    const [open, setOpen] = useState(false);
    const [activeGif, setActiveGif] = useState('');
    const handleOpen = (clickedGif: string) => {
        setOpen(true);
        setActiveGif(clickedGif);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const data = {
        "columns": [
            {
                "field": "images",
                "headerName": "Gif",
                "width": 150,
                renderCell: (params: any) => <a href="#" onClick={() => handleOpen(params.value.original.url)}>
                    <img src={params.value.fixed_width_small_still.url} />
                </a>,
            },
            {
                "field": "title",
                "headerName": "Description",
                "width": 400
            },
        ],
        "rows": gifs
    };

    return(
        <div>
            <DataGrid
                className={classes.grid}
                autoHeight
                pageSize={5}
                {...data}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                style={{ zIndex: 0 }}
            >
                <DialogContent dividers>
                    <img src={activeGif} />
                </DialogContent>
            </Dialog>
        </div>
   )
};
export default List;
