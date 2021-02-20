import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ShowToastInFlow extends LightningElement {
   @api toastmessage ="mess";
    @api toasttitle ="tt";
   @api toastvariant ="success";

    connectedCallback(){
        alert("in here" +this.toastmessage);
        this.handleEvent();
    }
renderedCallback(){  
     alert("in renderedCallback" +this.toastmessage);
    this.handleEvent();
}
    handleEvent(){
        alert("in here" +this.toastmessage);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' ,
            variant: 'success'
        })
      );
}
}