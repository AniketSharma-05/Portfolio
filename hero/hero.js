import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/expreiencecloudimage';
import  resumePdf from '@salesforce/resourceUrl/resume';
export default class Hero extends LightningElement {    
    heroImage = Image_Url + '/Expreince_cloud_project/hero1.webp';

    handleClickProject() {
        window.open('https://slt-e-dev-ed.develop.my.site.com/AniketSharma/s/projects', '_self');
    }
    resumeUrl = resumePdf;
    handleClickResume() {
        // Open the PDF in a new tab
        window.open(this.resumeUrl, '_blank');
    }
}