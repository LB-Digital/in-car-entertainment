import * as React from 'react';


/* config */
import * as ROUTES from '../../config/routes';


/* components */
// atoms
import {
    RouteIcon,
    SearchLocationIcon
} from '../atoms/icons/solid';
// organisms
import { VerticalNav } from './index';


const _NavVerticalNav = () => {


    return (
        <VerticalNav
            options={[
                { navTo: ROUTES.NAV.HOME, icon: RouteIcon, title: 'Nav' },
                { navTo: ROUTES.NAV.SEARCH, icon: SearchLocationIcon, title: 'Search' }
            ]}
        />
    )
};

export default _NavVerticalNav;