import React from 'react';
import classes from './styles.module.scss';

const Description = React.memo(() => {
    return (
        <div className={classes.descriptionContainer}>
            <p className={classes.secondaryText}>
                Hello and welcome to my portfolio website!
                <br />I am a driven and motivated{' '}
                <span className={classes.highlight}>Computer Science</span>{' '}
                graduate currently pursuing my{' '}
                <span className={classes.highlight}>Master's</span> degree at
                the{' '}
                <span className={classes.highlight}>
                    University of Colorado Boulder
                </span>
                . With extensive experience in software development from my time
                at <span className={classes.highlight}>Amdocs</span> and{' '}
                <span className={classes.highlight}>Tata Motors</span>, I have
                honed my skills and knowledge in the field. My passion for
                pushing the boundaries of technology and creating innovative
                solutions drives me to constantly learn and grow. When I'm not
                coding, you can find me enjoying my hobbies, including football,
                coffee, skiing, and books.
            </p>
        </div>
    );
});

export default Description;
