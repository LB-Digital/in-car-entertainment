import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import GoogleMapReact from 'google-map-react';


/* components */
// atoms
import { Spinner } from './index';


/* styles */
// styled components
const MapWrapper = styled('div')`
  width: 100%;
  height: 100%;
  
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  overflow: hidden;
  
`;

const SpinnerWrapper = styled('div')`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


/* config */
const GOOGLE_API_KEY = 'AIzaSyAO5TnqkMKu-XMT6Y6TJ2_AlLY9ZSjlmoQ';


const _Map = ({ zoom, lat, lng }) => {

    /* hooks */
    // styled-components
    const theme = useTheme();


    /* hooks:state */
    // map loaded
    const [ mapIsLoaded, setMapIsLoaded ] = React.useState(false);


    /* UI Handlers */
    // on google map api load
    const handleGoogleApiLoaded = (map, maps) => {
        // console.log('loaded!');

        setMapIsLoaded(true);


    };

    const createMapOptions = (maps) => ({
        styles: theme.mapStyles
    });


    /* render */
    return (
        <MapWrapper>
            {!mapIsLoaded && (
                <SpinnerWrapper>
                    <Spinner/>
                </SpinnerWrapper>
            )}

            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                defaultCenter={{ lat, lng }}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleGoogleApiLoaded(map, maps)}
                options={createMapOptions}
            />
        </MapWrapper>
    )
};

export default _Map;