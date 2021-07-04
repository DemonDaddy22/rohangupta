import React from 'react';
import GitHub from '../../assets/icons/GitHub';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';
import Instagram from '../../assets/icons/Instagram';
import classes from './styles.module.scss';

const SocialMediaIcons = React.memo(() => {
    return (
        <div className={classes.iconsContainer}>
            <a
                href="https://github.com/DemonDaddy22/"
                target="_blank"
                rel="noreferrer"
                className={classes.icon}
            >
                <GitHub />
            </a>
            <a
                href="https://www.linkedin.com/in/rohangupta22/"
                target="_blank"
                rel="noreferrer"
                className={classes.icon}
            >
                <LinkedIn />
            </a>
            <a
                href="https://twitter.com/Showstopper_RG"
                target="_blank"
                rel="noreferrer"
                className={classes.icon}
            >
                <Twitter />
            </a>
            <a
                href="https://www.instagram.com/shadesofdemon/"
                target="_blank"
                rel="noreferrer"
                className={classes.icon}
            >
                <Instagram />
            </a>
        </div>
    );
});

export default SocialMediaIcons;
