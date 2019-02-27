import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

export class BottleCard extends Component {
    render() {
        const { title, uri, clickUri, excerpt } = this.props;
        const { tpthumbnailuri, tpprixnormal, tpformat, tpregion, tppays,
            tpdisponibilite, tpinventairenomsuccursalesplitgroup,
            tpproducteur, tpcategorie,tpquantitelimite } = this.props.raw;
        return (
          <Card
            style={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                className="image"
                title="title"
                style={{ height: 400 }}
                image={tpthumbnailuri}/>
              <CardContent>
                <Typography
                  align={"center"}
                  variant="h5"
                  component="h3"
                >{title}</Typography>
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