import { Grid, Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Viewtitle(props){
    return (
        <Grid container>
            <Grid items xs={6}>
                <h2 className="ViewTitle">{props.children}</h2>
            </Grid>
            <Grid items xs={6}>
                {props.showButton?
                <div className="ButtonContainer">
                    <Button variant="contained" className="PrimaryButtonStyle" component={Link} to={props.buttonUrl}>{props.buttonText}</Button>
                </div>
                :
                null
            }
                
            </Grid>
        </Grid>
    );
}

export default Viewtitle;