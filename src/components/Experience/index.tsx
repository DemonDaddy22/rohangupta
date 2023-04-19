import React from 'react';
import classes from './styles.module.scss';

interface Props {}

interface TileProps extends IExperience {}

const EXPERINCE_DATA: Array<IExperience> = [
    {
        id: 1,
        company: 'Amdocs',
        position: 'Software Engineer',
        location: 'Pune, India',
        duration: 'Jan 2022 - Jun 2022',
        details: [
            {
                title: 'ATT Project',
                description: `Managed and incorporated new change requests which dealt with developing digital and pdf bills and understanding of business flows pertaining to feature development in specified time frames.`,
            },
            {
                title: 'T-Mobile Project',
                description: `Researched and implemented support for Multiple-Subscriber type billing where a single customer enrolled with multiple connections is charged separately based on data plan.`,
            },
            {
                title: 'Jeopardy Management System',
                description: `Responsible for creating Rest APIs using Java and Spring Boot and writing implementations for different service flows leveraging technologies like Spring, Java, Docker. Kubernetes.`,
            },
            {
                title: 'Impact',
                description: `Developed solutions for newer logic in pdt and web bills and contributed innovative ideas to improve products by working on automation framework for the Services and Orders using Cucumber and Java. Average testing time reduced by 36 percent.`,
            },
        ],
    },
    {
        id: 2,
        company: 'Amdocs',
        position: 'Associate Software Engineer',
        location: 'Pune, India',
        duration: 'Sep 2020 - Dec 2021',
        details: [
            {
                title: 'Deployment',
                description: `Worked on the generation of bills by ingesting and deploving the XML files which handled data of more than 3000 customers in a project using technologies like Spring Boot, Selenium, Java.`,
            },
            {
                title: 'Code Review and Integration',
                description: `Reviewed monthly results of Jira with 3 managers to identify highest and lowest penetration rates on all products, analyzing all pains in every product.`,
            },
            {
                title: 'Impact',
                description: `Created shell scripts to bootstrap, terminate and check the status of servers and automated the process of ingestion of bills for BriteBill and then improving efficiency of deliveries by 25 percent.`,
            },
        ],
    },
    {
        id: 3,
        company: 'Tata Motors',
        position: 'Graduate Engineering Trainee',
        location: 'Thane, India',
        duration: 'Jan 2020 - Jun 2020',
        details: [
            {
                title: 'Product Development',
                description: `Collaborated with a team of 3 to build MyDrive web application plattorm through which files and folders can be uploaded on Amazon S3 bucket, downloaded and shared with the provision of setting the expiration time.`,
            },
            {
                title: 'Digital Mobility Team',
                description: `Worked with 5 people to add, enhance and automate features in the EV segment.`,
            },
            {
                title: 'Impact',
                description: `The developed product was substantially able to reduce the costs by almost 15 percent that Tata Motors spent for platform like OneDrive.`,
            },
        ],
    },
];

const ExperienceTile: React.FC<TileProps> = (props) => {
    const { company, position, location, duration, details } = props;

    return (
        <div className={classes.tile}>
            <aside className={classes.tileMain}>
                <h3 className={classes.company}>{company}</h3>
                <p className={classes.position}>{position}</p>
                <footer className={classes.footer}>
                    <p className={classes.duration}>{duration}</p>
                    <p className={classes.location}>{location}</p>
                </footer>
            </aside>
            <div className={classes.tileContent}>
                {details.map((detail) => (
                    <div key={detail.title}>
                        <p className={classes.contentTitle}>{detail.title}</p>
                        <p className={classes.contentDescription}>
                            {detail.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Experience: React.FC<Props> = () => {
    return (
        <section className={classes.experienceContainer} id="experience">
            <h2 className={classes.experienceTitle}>Experience</h2>
            <div className={classes.lineDotted} />
            <div className={classes.tilesContainer}>
                {EXPERINCE_DATA.map((data) => (
                    <ExperienceTile key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
