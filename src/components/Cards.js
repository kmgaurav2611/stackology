import React from 'react'
import useWindowDimensions from './GetDimension';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

  
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Cards = ({card}) => {

    const {height, width} = useWindowDimensions();

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }} 
    onMouseEnter={()=>setExpanded(true)}
    onMouseLeave={()=>setExpanded(false)}
    
    style={{margin:30, }} >
     
      <CardMedia
        component="img"
        height="194"
        image={card?.imgSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h6' color="text.primary">
            {card.title}
        </Typography>
        
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="text.primary">
          {card?.details}
        </Typography>
         
        <Button sx={{marginTop:2, borderRadius:10, outlineColor:purple}} variant="outlined">{card?.buttonText}</Button>
        </CardContent>
      </Collapse>
    </Card>

   
  )
}

export default Cards