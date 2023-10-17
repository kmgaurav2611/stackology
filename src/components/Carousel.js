import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import useWindowDimensions from './GetDimension';


export default function MyCarousel(props)
{

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/5.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg'
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            src: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/5.jpg'
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const {height, width} = useWindowDimensions();

    return (
        <Paper 
        sx={{
            width: width,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center horizontally
            justifyContent: 'center', // Center vertically
          }}
        >
            <img  alt={'test'}  src={props.item.src} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}