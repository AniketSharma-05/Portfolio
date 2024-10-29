import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/expreiencecloudimage';
export default class ProjectCards extends LightningElement {
    githubLogo = Image_Url + '/Expreince_cloud_project/github.png';
    pdfLogo = Image_Url + '/Expreince_cloud_project/pdf.png';
    Certificates = [
        {   
            id:1,
            name: 'Figma UI/UX Design Essentials',
            tools: 'Figma',
            skills: 'Prototyping & Animation,Component & Variant Management,Collaborative Design',
            
            githubUrl: 'https://github.com/AniketSharma-05/Certificates/tree/main/Figma_UI_UX_Design_Essentials',
            pdfUrl:'https://www.udemy.com/certificate/UC-96606097-1e93-4d7d-b61e-714746e01421/'
        },
        {   
            id:2,
            name: 'UX Kickstarter Workshop',
            tools: 'Figma, AdobeXD, Mural',
            skills: 'UI/UX Fundamentals,Prototyping & Interaction,Component-Based Design',
            
            githubUrl: 'https://github.com/AniketSharma-05/Certificates/tree/main/UX_Kickstarter_Workshop',
            pdfUrl:'https://learners.growthschool.io/certificate/4e045592-0a2d-40aa-b7cf-126fe7b7c6e6'
        },
        
        // Add more projects as needed
    ];

    navigateToGitHub(event) {
        const url = event.currentTarget.dataset.url;
        window.open(url, '_blank');
    }
    
    navigateToPDF(event) {
        const url = event.currentTarget.dataset.url;
        window.open(url, '_blank');
    }
}
