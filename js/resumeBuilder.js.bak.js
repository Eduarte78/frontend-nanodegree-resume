//$("#main").append("Ed Seng");

//var awesomeThoughts = "I am Ed and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);
//console.log(awesomeThoughts);


var formattedName = HTMLheaderName.replace("%data%", "Ed Seng");
var formattedRole = HTMLheaderRole.replace("%data%", "Applications Engineer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/*var s = "audacity";
var uadacityizer = function(s){

	console.log(s);

	var x = s.slice(2);
	console.log(x);

	x = "U".concat(x);
	console.log(x);

	return x;
}


console.log(uadacityizer(s));
*/


//var skills = ["awesomeness", "programming", "coffee", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

var bio = {
	"name":"Ed Seng",
	"role":"Apps Engineer",
	"contacts":{
		"email": "edseng@gmail.com",
		"mobile":"617.817.9042"
				},
	"picURL":"images/fry.jpg",
	"welcome":"Hi how are ya",
	"skills":skills
	};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.picURL);
$("#main").append(bio.welcome);
$("#main").append(bio.skills.join(", "));


var work = {};
work.currJob = "Apps Team Lead";
work.employer = "Teradyne";
work.years = 14;
work.city = "North Reading";

var projects = {};

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
