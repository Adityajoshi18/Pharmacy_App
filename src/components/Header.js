import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles,withStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		backgroundColor: '#fff',
		transform:'translateZ(0)'
	}
})

export default function Header() {

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>

			</Toolbar>

		</AppBar>	
	)
}