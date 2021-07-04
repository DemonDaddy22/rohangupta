import React from 'react';
import classes from './styles.module.scss';

const ShootingStars = React.memo(() => {
    return (
        <div className={classes.starsContainer}>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
        </div>
    );
});

export default ShootingStars;
