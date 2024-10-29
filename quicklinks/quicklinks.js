import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/expreiencecloudimage';
import {NavigationMixin} from 'lightning/navigation';
export default class Quicklinks extends NavigationMixin(LightningElement) {
    data = [
        {
            id:1,
            image:Image_Url + '/Expreince_cloud_project/project1.webp',
            Text:'Projects',
        },

        {
            id:2,
            image:Image_Url + '/Expreince_cloud_project/project2.png',
            Text:'Skills',
        },

        {
            id:3,
            image:Image_Url + '/Expreince_cloud_project/hero2.jpeg',
            Text:'Certificates',
        }
    ];

    handleClick(event){
        let selectedCard = event.currentTarget.dataset.id;
        console.log('selectedCard' +JSON.stringify(selectedCard));
        
        if(selectedCard == 1){
            //project page
                console.log('project page');
              this.navigateToPages('project__c');
            

        }
        else if(selectedCard == 2){
            //skills page
            this.navigateToPages('skill__c');

        }
        else {
            //certificate page
            this.navigateToPages('certification__c');

        }
    }

    navigateToPages(pageApiName){    
        
        console.log('pageApiName in navigation function' +JSON.stringify(pageApiName));
        
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName
            }
        })

    }
}