import React from 'react';
import classes from './styles.module.scss';

const Description = React.memo(() => {
    return (
        <div className={classes.descriptionContainer}>
            <div className={classes.primaryText}>I code. I play. I click.</div>
            <div className={classes.secondaryText}>
                I'm someone who loves to create beautiful user interfaces
                providing slick experience.
                <br />
                Currently, I'm working as a Full-stack Software Engineer at
                Gameskraft with the Rummytime team.
            </div>
        </div>
    );
});

export default Description;
