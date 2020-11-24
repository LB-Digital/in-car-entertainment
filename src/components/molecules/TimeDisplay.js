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

        return `${hours}:${mins}`;
    };


    /* state */
    // time
    const [ time, setTime ] = React.useState(getCurrentTime());


    /* hooks */
    // effects
    React.useEffect(() => {
        const timeInterval =
            setInterval(() => setTime(getCurrentTime()), 1000);

        return () => clearInterval(timeInterval);
    }, []);


    /* render */
    return (size === 'lg') ? (
        <Header1>{ time }</Header1>
    ) : (
        <Header3>{ time }</Header3>
    );
};

export default _TimeDisplay;