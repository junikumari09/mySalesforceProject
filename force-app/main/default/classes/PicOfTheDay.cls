public class PicOfTheDay {
  
   @AuraEnabled
  
    public static  String getPicOfTheDay(){
     
        HTTP http = new HTTP();
        HTTPRequest req= new HTTPRequest();
        req.setEndpoint('callout:NasaAPI/planetary/apod');
        req.setHeader('x-api-key', '{!$Credential.Password}');
        req.setMethod('GET');
        HTTPResponse response= http.send(req);
        String body= response.getBody();
      
        return body;
       
  
        
    }
    
}