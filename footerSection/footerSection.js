import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/expreiencecloudimage';
export default class FooterSection extends LightningElement {   
    githubLogo = Image_Url + '/Expreince_cloud_project/github.png';

    linkedinLogo = Image_Url + '/Expreince_cloud_project/linkedin.png';
    gmailLogo = Image_Url + '/Expreince_cloud_project/gmail.png';
}