import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/expreiencecloudimage';
import Website from '@salesforce/schema/Account.Website';
export default class ProjectSection extends LightningElement {

    projectImage = Image_Url + '/Expreince_cloud_project/project3.webp'   

    projectData = [
        {
            id:1,
            name:'Project 1',
            description:'Project 1 description',
            technology:'Project 1 technology',
            Website:'www.google.com',
        },
        {
            id:2,
            name:'Project 2',
            description:'Project 2 description',
            technology:'Project 2 technology',
            Website:'www.google.com',
        },
        {
            id:3,
            name:'Project 3',
            description:'Project 3 description',
            technology:'Project 3 technology',
            Website:'www.google.com',
        }
    ]
}