# PCON-API


# to test the api do the following steps
 1. Install mongodb and nodejs
 2. Check if mongodb , nodejs ans npm are installed successfully
 3. After pulling the folder , open the terminal in that folder
      i.e. set the working directory as the folder in which 'app.js' file is present
 4. Run 'npm install'
 5. Create a database in mongodb , named as 'pcondb'.
 6. Run 'npm start' in your working directory
 7. Open mongodb & Create a collection named 'members' and import the 'member_pcon.json' file
      from 'public' folder into the 'members' collection
 8. Install 'Postman' from chrome extensions to handle different http requests
 9. From postman send a "GET" request at "http://localhost:3000/api/members",
      if you get the members json file in response you are good to go.
 10. To add a notice send a "POST" request to "http://localhost:3000/api/notices"
      and in "body" select "raw" and "file format as 'json'"

	schema is as
	{
		"head" : "heading of the notice",
		"body" : "Description of the notice",
		"from" : "start time of workshop if any",
		"to"   : "end time of workshop if any"
	}
 11. To see all the notices , send a "GET" request to "http://localhost:3000/api/notices"
 12. Similarly add the subscribers and get the response as json by sending get request.


	schema is as
	{
		"email" : "email of subscriber"
	}



NOTE: For GUI of mongodb use "mongodb compass".





//author:Shubhamkr17
