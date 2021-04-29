import React from 'react';
import Construction from '../../assets/Construction';
import classes from './styles.module.scss';

const Home = () => {
    return <div className={classes.homeContainer}>
        <Construction />
        <div className={classes.title}>Under Construction</div>
        <div className={classes.content}>My portfolio website is getting revamped, hope to see you soon!</div>
    </div>;
};

export default Home;