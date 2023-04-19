/* eslint-disable indent */
import React, { useMemo } from 'react';
import classes from './styles.module.scss';
import Course from '../../assets/icons/Course';
import { THEME_COLORS } from '../../resources/theme';

interface Props {}

interface TileProps extends IEducation {}

const EDUCATION_DATA: Array<IEducation> = [
    {
        id: 1,
        institute: 'University of Colorado Boulder',
        course: 'Master of Science in Computer Science',
        performance: {
            identifier: 'GPA',
            value: 3.7,
            maxValue: 4,
        },
        location: 'Boulder, USA',
        duration: 'Aug 2022 - Present',
    },
    {
        id: 2,
        institute: 'Thapar Institute of Engineering and Technology',
        course: 'Bachelor of Technology in Computer Engineering',
        performance: {
            identifier: 'GPA',
            value: 8.62,
            maxValue: 10,
        },
        location: 'Patiala, India',
        duration: 'Aug 2016 - Jul 2020',
    },
];

const EducationTile: React.FC<TileProps> = (props) => {
    const {
        id,
        institute,
        course,
        location,
        duration,
        performance: { identifier, value, maxValue },
    } = props;

    const courseImageColour = useMemo(() => {
        switch (id) {
            case 1:
                return THEME_COLORS.COLOR8;
            case 2:
                return THEME_COLORS.COLOR10;
            default:
                return THEME_COLORS.COLOR12;
        }
    }, [id]);

    return (
        <div className={classes.tile}>
            <header className={classes.header}>
                <p className={classes.institute}>{institute}</p>
                <h3 className={classes.course}>{course}</h3>
            </header>
            <div className={classes.tag}>
                <p className={classes.tagTitle}>{identifier}</p>
                <p className={classes.tagValue}>
                    {value} / {maxValue}
                </p>
            </div>
            <footer className={classes.footer}>
                <p className={classes.duration}>{duration}</p>
                <p className={classes.location}>{location}</p>
            </footer>
            <div className={classes.courseImage}>
                <Course
                    color={courseImageColour}
                    style={{ height: '10rem', width: '10rem' }}
                />
            </div>
        </div>
    );
};

const Education: React.FC<Props> = () => {
    return (
        <section className={classes.educationSection} id="education">
            <h2 className={classes.educationTitle}>Education</h2>
            <div className={classes.lineDotted} />
            <div className={classes.tilesContainer}>
                {EDUCATION_DATA.map((data) => (
                    <EducationTile key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
};

export default Education;
