import * as React from 'react';
import styled from 'styled-components';
import { stringify as qsStringify } from 'query-string';


/* components */
// atoms
import { Spinner } from './index';


/* styles */
// styled components
const WazeMapWrapper = styled('div')`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWazeMap = styled('iframe')`
  width: 100%;
  height: 100%;
`;


/* config */
const WAZE_IFRAME_URL = 'https://embed.waze.com/iframe';


//src="https://embed.waze.com/iframe?zoom=14&lat=51.482706&lon=-0.006696&ct=livemap"
const _WazeMap = ({ zoom, lat, lon, pin }) => {

    /* hooks:state */
    // map source
    const [ mapSrc, setMapSrc ] = React.useState(null);

    // map loaded
    const [ mapIsLoaded, setMapIsLoaded ] = React.useState(false);


    /* hooks:effects */
    // map source
    React.useEffect(() => {
        const queryString = '?' + qsStringify(Object.assign({},
            zoom && { zoom },
            lat && { lat },
            lon && { lon },
            pin && { pin: 1 }
        ));

        setMapSrc(`${WAZE_IFRAME_URL}${queryString}`);

    }, [ zoom, lat, lon, pin ]);


    /* render */
    return (
        <WazeMapWrapper>
            {!mapIsLoaded && (
                <Spinner/>
            )}

            <StyledWazeMap
                onLoad={() => setMapIsLoaded(true)}
                src={mapSrc}
                style={{ display: (mapIsLoaded ? null : 'none') }}
            />
        </WazeMapWrapper>
    )
};

export default _WazeMap;