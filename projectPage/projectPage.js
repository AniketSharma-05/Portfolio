import { LightningElement } from 'lwc';

export default class ProjectCards extends LightningElement {
    projects = [
        {
            name: 'Project Name 1',
            tools: 'Tool1, Tool2',
            skills: 'Skill1, Skill2',
            description: 'This is a brief description of Project 1.',
            githubUrl: 'https://github.com/YourGitHubRepo1'
        },
        {
            name: 'Project Name 2',
            tools: 'Tool3, Tool4',
            skills: 'Skill3, Skill4',
            description: 'This is a brief description of Project 2.',
            githubUrl: 'https://github.com/YourGitHubRepo2'
        },
        {
            name: 'Project Name 3',
            tools: 'Tool5, Tool6',
            skills: 'Skill5, Skill6',
            description: 'This is a brief description of Project 3.',
            githubUrl: 'https://github.com/YourGitHubRepo3'
        },
        {
            name: 'Project Name 4',
            tools: 'Tool7, Tool8',
            skills: 'Skill7, Skill8',
            description: 'This is a brief description of Project 4.',
            githubUrl: 'https://github.com/YourGitHubRepo4'
        },
        // Add more projects as needed
    ];

    navigateToGitHub(event) {
        const url = event.currentTarget.dataset.url;
        window.open(url, '_blank');
    }
}
