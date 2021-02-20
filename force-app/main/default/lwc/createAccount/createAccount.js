import { LightningElement } from 'lwc';
import ACCOUNT  from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name'
import TYPE from '@salesforce/schema/Account.Type'
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import showToast from 'lightning/platformShowToastEvent';
export default class CreateAccount extends LightningElement {
object=ACCOUNT;
fields={NAME,TYPE,REVENUE_FIELD,INDUSTRY_FIELD};
handleSuccess(event){
const toastEvent = new ShowToastEvent({
    title: "Account created",
    message: "Record ID: " + event.detail.id,
    variant: "success"
});
this.dispatchEvent(toastEvent);

}
}