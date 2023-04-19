import React from 'react';
import Header from '../Header';
import Description from '../Description';
import SocialMediaIcons from '../SocialMediaIcons';
import classes from './styles.module.scss';
import ProfilePicture from '../ProfilePicture';

interface Props {}

const Introduction: React.FC<Props> = () => {
    return (
        <section className={classes.introductionSection} id="introduction">
            <ProfilePicture />
            <div>
                <Header />
                <Description />
                <SocialMediaIcons />
            </div>
            <div className={classes.patternBorderBlue} />
            <div className={classes.patternBorderYellow} />
        </section>
    );
};

export default Introduction;
