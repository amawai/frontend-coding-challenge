import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class BottleCard extends Component {
    render() {
        const { title, uri, clickUri, excerpt, classes } = this.props;
        const { tpthumbnailuri, tpprixnormal, tpformat, tpregion, tppays,
            tpdisponibilite, tpinventairenomsuccursalesplitgroup,
            tpproducteur, tpcategorie,tpquantitelimite } = this.props.raw;
        return (
          <Card
            className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title={title}
                src="img">
                <img src={tpthumbnailuri} alt={'drink'} className={classes.image} />
              </CardMedia>
              <CardContent>
                <Typography
                  align={"center"}
                  variant="h5"
                  component="h2"
                  style={{overflowWrap: 'break-word'}}>
                    {title}
                  </Typography>
                <Typography variant="subtitle1">
                {`${tpformat}${tpquantitelimite ? ' | Limité' : ''}`}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  align={"center"}
                  variant="h5"
                  component="h4"
                 >{tpprixnormal}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
    }
}

const styles = theme => ({
  card: {
    width: 350,
    display: 'inline-block',
    marginRight: '1em',
    marginBottom: '1em'
  },
  media: {
    height: 250
  },
  image: {
    width: '50%'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

export default withStyles(styles)(BottleCard);