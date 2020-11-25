import * as React from 'react';


/* config */
import * as ROUTES from '../../config/routes';


/* components */
// atoms
import {
    AlbumCollectionIcon, ListMusicIcon, MusicIcon, UserMusicIcon, WaveformIcon
} from '../atoms/icons/solid';
// organisms
import { VerticalNav } from './index';


const _MusicVerticalNav = () => {


    return (
        <VerticalNav
            options={[
                { navTo: ROUTES.MUSIC.HOME, icon: MusicIcon, title: 'Music' },
                { navTo: ROUTES.MUSIC.NOW_PLAYING, icon: WaveformIcon, title: 'Now Playing' },
                { navTo: ROUTES.MUSIC.PLAYLISTS, icon: ListMusicIcon, title: 'Playlists' },
                { navTo: ROUTES.MUSIC.HOME, icon: AlbumCollectionIcon, title: 'Albums' },
                { navTo: ROUTES.MUSIC.HOME, icon: UserMusicIcon, title: 'Artists' }
            ]}
        />
    )
};

export default _MusicVerticalNav;