import React from 'react'
import Controls from "./controls/Controls";
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup_New_Event(props) { 

	const { title,children, openPopupnew, setOpenPopupnew } = props;
	const classes = useStyles();

	return (
		<Dialog open={openPopupnew} maxWidth='md' classes={{ paper: classes.dialogWrapper }}>
			<DialogTitle className={classes.dialogTitle}>
				<div style={{ display: 'flex' }}>
					<Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
						{title}
					</Typography>
					<Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopupnew(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
				</div>

			</DialogTitle>
			<DialogContent dividers>
				{children}

			</DialogContent>


		</Dialog>
		
	)
}