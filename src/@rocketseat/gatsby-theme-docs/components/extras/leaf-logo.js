import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'

export const LeafLogo = () => {
    const matches = useMediaQuery('(max-width:500px)')
    return(
    !matches ?
    <img alt="Digital Nexus Numerique Logo" src="/leaf-logo.png" width="200" />
    :<img alt="Digital Nexus Numerique Logo" src="/leaf-logo.png" width="100" />
    )
}
export default LeafLogo