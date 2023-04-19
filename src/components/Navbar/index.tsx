import React, { useCallback, useState } from 'react';
import classes from './styles.module.scss';
import Hand from '../../assets/icons/Hand';
import School from '../../assets/icons/School';
import Work from '../../assets/icons/Work';
import Tool from '../../assets/icons/Tool';
import { ACCENT_COLORS, THEME_COLORS } from '../../resources/theme';

const NAV_ITEMS = {
    PROFILE: 'introduction',
    EDUCATION: 'education',
    WORK: 'experience',
    PROJECTS: 'projects',
};

interface Props {}

const Navbar: React.FC<Props> = () => {
    const [selectedItem, setSelectedItem] = useState(NAV_ITEMS.PROFILE);

    const handleNavItemClick = useCallback((item: string) => {
        setSelectedItem(item);
        if (item === NAV_ITEMS.PROFILE) {
            window?.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(item);
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <nav className={classes.navbar}>
            <div
                className={classes.navbarItem}
                onClick={() => handleNavItemClick(NAV_ITEMS.PROFILE)}
            >
                <Hand
                    color={
                        selectedItem === NAV_ITEMS.PROFILE
                            ? THEME_COLORS.COLOR1
                            : ACCENT_COLORS.COLOR1
                    }
                />
            </div>
            <div
                className={classes.navbarItem}
                onClick={() => handleNavItemClick(NAV_ITEMS.EDUCATION)}
            >
                <School
                    color={
                        selectedItem === NAV_ITEMS.EDUCATION
                            ? THEME_COLORS.COLOR11
                            : ACCENT_COLORS.COLOR1
                    }
                />
            </div>
            <div
                className={classes.navbarItem}
                onClick={() => handleNavItemClick(NAV_ITEMS.WORK)}
            >
                <Work
                    color={
                        selectedItem === NAV_ITEMS.WORK
                            ? THEME_COLORS.COLOR15
                            : ACCENT_COLORS.COLOR1
                    }
                />
            </div>
            <div
                className={classes.navbarItem}
                onClick={() => handleNavItemClick(NAV_ITEMS.PROJECTS)}
            >
                <Tool
                    color={
                        selectedItem === NAV_ITEMS.PROJECTS
                            ? THEME_COLORS.COLOR23
                            : ACCENT_COLORS.COLOR1
                    }
                />
            </div>
        </nav>
    );
};

export default Navbar;
