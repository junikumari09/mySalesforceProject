import { LightningElement, api, track } from "lwc";
import getPicOfTheDay from "@salesforce/apex/PicOftheDay.getPicOfTheDay";
export default class RestAPIApexCallout extends LightningElement {
  apodresult;
  loading = false;  
  image = true;

  handleClick() {
    this.loading = true;
    
    getPicOfTheDay({})
      .then((res) => {
        this.loading = false;
        this.response = true;
        //Convert the JSON String into JS object
        this.apodresult = JSON.parse(res);

        if (this.apodresultmedia_type === "video") this.image = false;
        else this.image = true;
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }
}
