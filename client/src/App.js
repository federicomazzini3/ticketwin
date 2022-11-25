import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import{ useDispatch } from 'react-redux'

import sampleImage from './images/JLS.jpg'
import useStyles from './styles'
import Competitions from './components/Competitions/Competitions'
import Form from './components/Form/Form'
import { getCompetitions } from './actions/competitions'

const App = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompetitions());
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading} variant="h2" align="center">TicketWin</Typography>
                <img className={styles.image} src={sampleImage} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Competitions/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;