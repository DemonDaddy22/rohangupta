import React from 'react';
import classes from './styles.module.scss';

interface Props {}

const ProfilePicture: React.FC<Props> = () => {
    return (
        <div className={classes.profilePictureContainer}>
            <img
                src="https://res.cloudinary.com/yelp-camp/image/upload/v1681632545/portfolio/ritik-jain-portfolio-1.jpg"
                className={classes.profilePicture}
                alt="Ritik Jain display picture"
            />
            <div className={classes.patternSquareDefault} />
            <div className={classes.patternSquareLighter} />
            <div className={classes.patternCirclesContainer}>
                <div className={classes.patternCircle} />
                <div className={classes.patternCircle} />
                <div className={classes.patternCircle} />
            </div>
        </div>
    );
};

export default ProfilePicture;
