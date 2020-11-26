import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { WazeMap } from '../../components/atoms';
// organisms
import { VerticalNav } from '../../components/organisms';


/* styles */
// styled components
const StyledNavPage = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  background: ${({ theme: { colors } }) => colors.pages.nav};
`;

const MapWrapper = styled('div')`
  flex: 1;
  height: 100%;
`;


/* config */
const MAP_CONFIG = {
    zoom: 14,
    lat: 51.482706,
    lon: -0.006696,
    pin: true
};


const _NavPage = () => {


    return (
        <StyledNavPage>
            <VerticalNav
                options={[

                ]}
            />

            <MapWrapper>
                <WazeMap {...MAP_CONFIG} />
            </MapWrapper>
        </StyledNavPage>
    )
};

export default _NavPage;