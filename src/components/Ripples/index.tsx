import React from 'react';
import classes from './styles.module.scss';

const Ripples = React.memo(() => {
    return (
        <div className={classes.ripplesContainer}>
            <div className={classes.ripple}></div>
            <div className={classes.ripple}></div>
            <div className={classes.ripple}></div>
        </div>
    );
});

export default Ripples;
