
var formattedName = HTMLheaderName.replace("%data%", "Ed Seng");
var formattedRole = HTMLheaderRole.replace("%data%", "Applications Engineer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
	"name":"Ed Seng",
	"role":"Applications Engineer / Team Lead",
	"contacts":{
		"email": "edseng@gmail.com",
		"mobile":"617.817.9042"
				},
	"picURL":"images/fry.jpg",
	"welcome":"Hi how are ya",
	"skills":skills
	};



var work = {};
	work.currJob = "Apps Team Lead";
	work.employer = "Teradyne";
	work.years = 14;
	work.city = "North Reading";



var education = {
		"schools" : [
			{
				"name" : "Penn State",
				"city" : "State College",
				"degree" : "BS",
				"majors" : ["EE"],
				"minors" : ["Product Realization"]
			}],
		"onlineCourses" : [
			{
				"name" : "Udacity.com",
				"city" : "n/a",
				"degree" : "n/a",
				"majors" : [""],
				"minors" : [""]
			}
		]
};



var projects = {
	"names" : [
		"HSD200",
		"RF Noise",
		"ESD",
		"HDMI / LVDS Char",
		"DDR",
		"DigRF",
		"Concurrent Test",
		"TimeLines Tool",
		"Dragon"
		]};