import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

class SCFrmMaterialUI extends React.Component {
        render() {
                return (
                        <React.Fragment>
                                <Typography variant="h4" gutterBottom>
                                        Welcome to React</Typography>
                                <Button variant="contained" color="primary">Submit</Button>
                        </React.Fragment>)
        }
}

export default SCFrmMaterialUI;