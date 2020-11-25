import * as React from 'react';


/* components */
// atoms
import { Header1, Header3 } from '../atoms/document_sections';


const _TimeDisplay = ({ size }) => {
    /* utility methods */
    // get current time
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const mins = ('0' + now.getMinutes()).slice(-2);
        const secs = now.getSeconds();

        return { hours, mins, secs };

        // return `${hours}:${mins}`;
    };


    /* state */
    // time
    const [ time, setTime ] = React.useState(getCurrentTime());


    /* hooks:effect */
    // update time every second
    React.useEffect(() => {
        const timeInterval =
            setInterval(() => setTime(getCurrentTime()), 1000);

        return () => clearInterval(timeInterval);
    }, []);


    /* render */
    return (size === 'lg') ? (
        <Header1>
            { time.hours }
            <span style={{ opacity: (time.secs % 2 === 0) ? 0.3 : 1 }}>:</span>
            { time.mins }
        </Header1>
    ) : (
        <Header3>
            { time.hours }
            <span style={{ opacity: (time.secs % 2 === 0) ? 0.3 : 1 }}>:</span>
            { time.mins }
        </Header3>
    );
};

export default _TimeDisplay;