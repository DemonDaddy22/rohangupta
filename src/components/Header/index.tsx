import React from 'react';
import classes from './styles.module.scss';

const Header = React.memo(() => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.secondaryText}>Hey, I'm</div>
            <div className={classes.primaryText}>Ritik Jain</div>
        </div>
    );
});

export default Header;
