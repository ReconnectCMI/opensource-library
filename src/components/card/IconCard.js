import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      float: 'left',
      margin: '12px',
    },
});

IconCard.propTypes = {
    image: PropTypes.string.isRequired, // must be a string and defined
    title: PropTypes.string.isRequired, // must be a string and defined
    description: PropTypes.string.isRequired, // must be a string and defined
};

function IconCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt={props.title}
                height="200"
                image={props.image}
                title={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default IconCard;
