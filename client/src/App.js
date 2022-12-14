import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import sharelife from './images/sharelife.jpg'
const App = ()=> {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    ShareLife
                </Typography>
                <img src= {sharelife} alt='sharelife' height="600" />            
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing="3">
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />   
                            </Grid>
                        </Grid>
                    </Container>

                </Grow>
        </Container>
    )
}

export default App;