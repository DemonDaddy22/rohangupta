import React from 'react';
import classes from './styles.module.scss';

interface Props {}

interface TileProps extends IProject {}

const PROJECT_DATA: Array<IProject> = [
    {
        id: 1,
        title: 'Web UI for Stable Diffusion',
        description: `Implemented a scalable UI for stable diffusion using Vue.js for frontend and Flask for REST API, containerized using Docker for ease of deplopment and management. Programmed RESTful APIs to facilitate communication between the frontend, backend, and S3 bucket to store generated images. Leveraged Vue.js' state management using Vuex to implement sessions. Deploved application using Kubernetes on GCP for elevated scalability, and load balancing, implementing an ingress controller for load balancing.`,
    },
    {
        id: 2,
        title: 'Smart Parking System',
        description: `Collaborated with a team of 4 to create a parking system in which slots are generated dynamically on an open area and user can navigate to the allocated slot. Optimized the use of parking space, as atleast 20 percent more slots got generated. Technologies used were Android, Python, PyQt5.`,
    },
    {
        id: 3,
        title: 'Smart Bot',
        description: `Co-developed a system in which bots travel from one place to another through the shortest path and at same time avoiding collision. Dijkstra's algorithm was modified and implemented for finding shortest paths. Technologies used were Python, IoT, ReactJS.`,
    },
];

const ProjectTile: React.FC<TileProps> = (props) => {
    const { title, description } = props;

    return (
        <div className={classes.tile}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
        </div>
    );
};

const Projects: React.FC<Props> = () => {
    return (
        <section className={classes.projectsSection} id="projects">
            <h2 className={classes.projectsTitle}>Projects</h2>
            <div className={classes.lineDotted} />
            <div className={classes.tilesContainer}>
                {PROJECT_DATA.map((data) => (
                    <ProjectTile key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
