import { LightningElement } from 'lwc';
import CONTACTOBJ from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class ContactCreator extends LightningElement {
object=CONTACTOBJ;
fields=[FirstName,LastName,Email];
handleSuccess(event){
  const toast=new ShowToastEvent(  {title: 'Contact created',
    message: 'Record Created'+event.detail.id,
    variant: 'success'});
    this.dispatchEvent(toast);
    
}

}