import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Description from './Description';
import Information from './Information';
import Reviews from './Reviews';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    tabCont: {
    },
    tabHeader: {
        borderBottom: "1px solid #e5e5e5",
    },
    tabFooter: {
        padding: "24px 0",
        backgroudnColor: "red",
    },
    tab: {
        textAlign: "center",
    },
    tabTitle: {
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "13px",
        padding: "20px 24px",
        display: "block",
        color: "#6c757d",
    },
    line: {
      height: "1px",
      backgroundColor: "rgba(0,0,0,.1)",
      margin: "16px 0",
    },
    tabPlus: {
        borderBottom: "3px solid #1266f1",
        color: "#1266f1!important",
    },
})) 

const ForTab = () => {

    const classes = useStyles()
    const aaa = classes.tabCont

    const [tab, setTaba] = useState({tab1: classes.tabPlus, tab2: '', tab3: '',})

    function description() { 
        setTaba({tab1: classes.tabPlus, tab2: '', tab3: '',}) 
    }

    function information() { 
        setTaba({tab1: '', tab2: classes.tabPlus, tab3: '',}) 
    }

    function reviews() { 
        setTaba({tab1: '', tab2: '', tab3: classes.tabPlus,}) 
    }



    return (
        <Box className={classes.tabCont} component="section">
            <Router>
                <Grid className={classes.tabHeader} container>
                    <Grid className={classes.tab} item sm={4} >
                        <Link onClick={description} className={`${classes.tabTitle} ${tab.tab1}`} to="/product">DESCRIPTION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link onClick={information} className={`${classes.tabTitle} ${tab.tab2}`} to="/information">INFORMATION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link onClick={reviews} className={`${classes.tabTitle} ${tab.tab3}`} to="/reviews">REVIEWS</Link>
                    </Grid>
                </Grid>
                <Box className={classes.tabFooter}>
                    <Switch>
                        <Route path="/product">
                            <Description />
                        </Route>
                        <Route path="/information">
                            <Information />
                        </Route>
                        <Route path="/reviews">
                            <Reviews />
                        </Route>
                    </Switch>
                </Box>
                <Box className={classes.line}/>
            </Router>
        </Box>
    );
};

export default ForTab;