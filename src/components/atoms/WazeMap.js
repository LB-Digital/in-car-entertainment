import * as React from 'react';
import styled from 'styled-components';
import { stringify as qsStringify } from 'query-string';
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
  
  //display: flex;
  //justify-content: center;
  //align-items: center;
  
  //position: relative;
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

    /* hooks:state */
    // map loaded
    const [ mapIsLoaded, setMapIsLoaded ] = React.useState(false);


    /* hooks:effects */
    // map source
    // React.useEffect(() => {
    //     const queryString = '?' + qsStringify(Object.assign({},
    //         zoom && { zoom },
    //         lat && { lat },
    //         lon && { lon },
    //         pin && { pin: 1 }
    //     ));
    //
    //     setMapSrc(`${WAZE_IFRAME_URL}${queryString}`);
    //
    // }, [ zoom, lat, lon, pin ]);


    /* UI Handlers */
    // on google map api load
    const handleGoogleApiLoaded = (map, maps) => {
        console.log('loaded!');

        setMapIsLoaded(true);


    };


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
            />
        </MapWrapper>
    )
};

export default _Map;