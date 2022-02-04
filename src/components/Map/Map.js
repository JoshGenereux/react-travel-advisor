import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import {LocationOnOutlined} from "@material-ui/icons";

const Map = ()=>{
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px')

  const coordinates = { lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyBcHfMYXoIMyiSipdEv7fCOU-Y_QvBSv1E'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      />
    </div>
  )
}

export default Map;