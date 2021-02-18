public with sharing class APODClass {
    public String copyright;
	public date date1;
	public String explanation;
	public String media_type;
	public String service_version;
	public String title;
	public String url;

	
	public static APODClass parse(String json) {
		return (APODClass) System.JSON.deserialize(json, APODClass.class);
    }
	
}


