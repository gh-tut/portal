import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Style from '../style/home.module.css'
import typoStyle from '../style/typography.module.css'

function Home(){
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          color: theme.palette.text.secondary,
          height: '200px',
        },
    }))
    const classes = useStyles();
    return (
        <div>
            <div className = {Style.body}>
                <div className = {Style.TextArea}>
                    <p className = {typoStyle.h3}>
                        TUT Assembly Room Reservation System
                    </p>
                    <p className = {typoStyle.h5}>
                        Reserve Assembly Room through Web site
                    </p>
                </div>
            </div>
            <div className = {Style.body2}>
                <Grid container spacing={3} className={Style.grid}>
                    <Grid item xs>
                        <Paper className = {classes.paper}>
                            <p className = {typoStyle.h6}>
                                What's TUT ARRS?
                            </p> 
                            <p className = {typoStyle.h6sub}>
                                TUT ARR stands for "TUT Assembly Room Reservation System" that you can reserve Assembly Room through Website.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className = {classes.paper}>
                            <p className = {typoStyle.h6}>
                                What you can do?
                            </p>
                            <p className = {typoStyle.h6sub}>
                                You can check events like workshop, UnitLeaders' meeting, screening party,etc...
                                <br/>
                                Also you can book Assembly room for some reason.
                            </p> 
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className = {classes.paper}>
                            <p className = {typoStyle.h6}>
                                What's coming next?
                            </p>
                            <p className = {typoStyle.h6sub}>
                                No one knows
                            </p>  
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Home