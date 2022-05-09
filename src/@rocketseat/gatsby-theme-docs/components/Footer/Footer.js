import React from 'react'
import './footer.css'

import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'

const Footer = () => {
    const matches = useMediaQuery('(max-width:500px)')

    return (
    !matches ?
        <div className="footer">
            <Grid container alignItems="space-between" justifyContent="center" spacing={1} direction="row">
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="left">
                    <img src="/national-defense.png" alt="National Defense" width={100} style={{marginTop:'45px', marginLeft:'5px'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align="center">
                    <img src="/army-footer-crest.png" alt="Canadian Army Crest" height={75} style={{marginTop: '-10px'}} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="right">
                    <img src="/canada.gif" alt="Canada" width={100} style={{marginTop: '40px', marginRight:'205px'}} />
                </Grid>
            </Grid>
        </div>
        :
        <div className="footer-mobile">
            <Grid container alignItems="space-between" justifyContent="center" spacing={1} direction="row">
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="left">
                    <img src="/national-defense.png" alt="National Defense" width={100} style={{marginTop:'45px', marginLeft:'5px'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align="center">
                    <img src="/army-footer-crest.png" alt="Canadian Army Crest" height={75} style={{marginTop: '-10px'}} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="right">
                    <img src="/canada.gif" alt="Canada" width={100} style={{marginTop: '40px', marginRight:'5px'}} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer