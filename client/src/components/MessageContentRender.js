import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import clsx from 'clsx';
import { saveAs } from 'file-saver';
//import FileViewer from 'react-file-viewer';

var str2ab = require('string-to-arraybuffer')

const useStyles = makeStyles(theme => ({

    textBox: {
        margin: 0,
        whiteSpace: 'pre-line',
        overflowWrap: 'break-word',
        width: 'inherit'
    },
    leftBox: {
        textAlign: 'start'
    }
}))

/*
supposed to use with FileViewer
const stripDownFileType = preStrip => {
    const idx = preStrip.indexOf('/');
    if (idx !== -1) {
        return preStrip.slice(idx + 1);
    }
}
*/

export default function MessageContentRender({ payload }) {
    const { _metaData, data } = payload;
    const { name, type } = _metaData


    const classes = useStyles();

    const isFile = !(type === 'raw text');

    /*
    var file, filePath, strippedType;
    if (isFile) {
        var arrBuf = str2ab(data);
        file = new File([arrBuf], name, { type });
        filePath = URL.createObjectURL(file);
        console.log(filePath)
        strippedType = stripDownFileType(type);
    }
    */
    const saveFile = () => {
        const file = new File([str2ab(data)], name, { type });
        saveAs(file, file.name)
    }


    return (
        <Grid item className={clsx(classes.textBox, classes.leftBox)}>
            {
                isFile
                    ? <Button onClick={saveFile} style={{ textTransform: 'none' }}>
                        <Typography component='b' color='textSecondary' style={{ fontWeight: 'bold' }}>
                            File: {name}
                        </Typography>
                    </Button>

                    : <Typography variant='body1' >
                        {data}
                    </Typography>
            }
        </Grid >


    )
}

/*
<FileViewer
                        fileType={strippedType}
                        filePath={filePath}
                        onError={e => console.error(e)}
                    />
*/
