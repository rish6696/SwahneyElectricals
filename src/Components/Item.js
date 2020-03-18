import { React } from 'react';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

function Item(props)
{
    return(
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Item;

