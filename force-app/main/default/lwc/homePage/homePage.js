import { LightningElement,api,track } from 'lwc';
import getPicOfTheDay from '@salesforce/apex/PicOftheDay.getPicOfTheDay'
export default class HomePage extends LightningElement {
   @api apodresult
   @api type;
   @api url;
    @track loading = false;
    @api explanation;
    @api title;
    response=false
    image=true;

    handleClick(){
        alert("in v");
        this.loading =true;
        this.response=false;
              
        getPicOfTheDay({}).then(res=>{
        alert("re"+res);
        this.loading=false;
        this.response=true;
        //this.apodresult =  Json.parse(res);
        this.url= JSON.parse(res).url;
        this.type=JSON.parse(res).media_type;
        this.title=JSON.parse(res).title;
        this.explanation=JSON.parse(res).explanation;
        alert("re"+this.url);
        alert("rr"+this.type);
       // alert("@"+this.apodresult.url);
      
        if(this.type==="video")
            this.image=false;
        else
            this.image=true;

        }).catch(error => {
            console.log('Error: ' +error);
        })

        
    }



}