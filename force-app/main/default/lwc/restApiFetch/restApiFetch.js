import { LightningElement } from "lwc";

export default class RestApiFetch extends LightningElement {
  apodresult;
  loading = false;
  response = false;
  image = true;

  handleClick() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=cd6JN6xIeW56GKiDNl6rYlS394FVweClukuABaJ7"
    )
      .then((response) => {
        // fetch isn't throwing an error if the request fails.
        // Therefore we have to check the ok property.
        // The thrown error will be catched on the catch() method
        if (!response.ok) {
          throw Error(response);
        } else {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        this.apodresult = jsonResponse;
        if (this.apodresult.media_type === "video") image = true;
      })
      .catch((error) => {
        this.error = error;
        this.apodresult = undefined;
      });
  }
}
