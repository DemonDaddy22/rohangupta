/* eslint-disable no-unused-vars */
interface IEducation {
    id: number;
    institute: string;
    course: string;
    location: string;
    duration: string;
    performance: {
        identifier: string;
        value: number;
        maxValue: number;
    };
}

interface IExperience {
    id: number;
    company: string;
    position: string;
    location: string;
    duration: string;
    details: Array<{ title: string; description: string }>;
}

interface IProject {
    id: number;
    title: string;
    description: string;
}
