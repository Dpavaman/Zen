var header =  document.createElement('div');
header.setAttribute('class','header');

var userIcon = document.createElement('i');
userIcon.setAttribute('class','fas fa-user-circle icon');

var whiteSegment = document.createElement('div');
whiteSegment.setAttribute('class', 'white-segment');

var nameCard = document.createElement('div');
nameCard.setAttribute('class', 'name-card');

var nameDiv = document.createElement('div');
var H1 = document.createElement("H1");
var NAME = document.createTextNode("BRIAN DUDEY"); 
H1.setAttribute('class','name')

H1.appendChild(NAME);
nameDiv.appendChild(H1); 
nameCard.appendChild(nameDiv);
whiteSegment.appendChild(nameCard);
header.appendChild(userIcon);
header.appendChild(whiteSegment);

document.body.appendChild(header);

var residence = document.createElement('div');
var H3 = document.createElement("H3");
var residenceContent = document.createTextNode('N. Damen Avenue, Chicago 99999 | 999-999-9999 | someone@example.com | www.example.com');
H3.setAttribute('class','residence');
var horizontalLine = document.createElement('hr');
var brake = document.createElement('br');
H3.appendChild(residenceContent);
residence.appendChild(H3);
residence.appendChild(horizontalLine);

document.body.appendChild(residence);
document.body.appendChild(brake);

//--------------------------------------------------------Header Part Done --------------------------------------------------------
//--------------------------------------------------------Left Part----------------------------------------------------------------
var leftPart = document.createElement('div');
leftPart.setAttribute('class','split-left');  // Screen is split to 50% and working on left 50%

// ------------------------------------------------------- Creating Profile icon, Profile Head and Profile Description: Started------------------------

var profileDiv = document.createElement('div');                           //Division Containing Profile Info.
var profileIcon = document.createElement('i');                           //Element icon is Created
profileIcon.setAttribute('class','fa fa-user content-icons');           
var profileHead = document.createElement('H2');                               //Headding Profile is Created
profileHead.setAttribute('class','attributes');
var profile = document.createTextNode('Profile');
profileHead.appendChild(profile);
var profileDescriptionHead = document.createElement('H4');
profileDescriptionHead.setAttribute('class','content');
profileDescriptionHead.appendChild(document.createTextNode('Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.'))

profileDiv.appendChild(profileIcon);
profileDiv.appendChild(profileHead);
profileDiv.appendChild(document.createElement('br'))
profileDiv.appendChild(profileDescriptionHead);

// ------------------------------------------------------- Profile icon, Profile Head and Profile Description : Done.-----------------------


// ------------------------------------------------------- Appending the Profile Section to the Left half of the splitted section------------------------
leftPart.appendChild(profileDiv);
leftPart.appendChild(document.createElement('br'));
// ------------------------------------------------------- Appending the Profile Section to the Left half of the splitted section is Done------------------------


//---------------------------------------------------------Creating Skill icon, Skill head, and Subheaddings : Started---------------------------------------------------

var skillsDiv = document.createElement('div'); 

var skillIcon = document.createElement('i');  
skillIcon.setAttribute('class','fas fa-laptop-code content-icons');
var skillsHead = document.createElement('H2'); 
skillsHead.setAttribute('class','attributes');
var skill = document.createTextNode('Skills');
skillsHead.appendChild(skill);

var skillsInnerDiv = document.createElement('div');
var techSkillsHead = document.createElement('p');
techSkillsHead.setAttribute('class','skills-subheads content');
techSkillsHead.appendChild(document.createTextNode('Technical Skills'));
skillsInnerDiv.appendChild(techSkillsHead);

var techSkillsInnerDiv = document.createElement('div');
techSkillsInnerDiv.setAttribute('class','split-text');
//------------------------------------------Append below ones to the above div-----------------------------


//--------------------------JavaScript------------------------------
var JavaScript = document.createElement('H4');
JavaScript.appendChild(document.createTextNode('JavaScript'));

var JavaScriptBar = document.createElement('div');
JavaScriptBar.setAttribute('class','bar rm-30');

var JavaScriptBarLevel = document.createElement('div');
JavaScriptBarLevel.setAttribute('class','progress');
JavaScriptBarLevel.setAttribute('style','width:80%;');

JavaScriptBar.appendChild(JavaScriptBarLevel);
JavaScript.appendChild(JavaScriptBar);

techSkillsInnerDiv.appendChild(JavaScript);
//-----------------------------JavaScript Done--------------------------

//--------------------------CSS------------------------------
var CSS = document.createElement('H4');
CSS.appendChild(document.createTextNode('CSS'));

var CSSBar = document.createElement('div');
CSSBar.setAttribute('class','bar rm-30');

var CSSBarLevel = document.createElement('div');
CSSBarLevel.setAttribute('class','progress');
CSSBarLevel.setAttribute('style','width:80%;');

CSSBar.appendChild(CSSBarLevel);
CSS.appendChild(CSSBar);

techSkillsInnerDiv.appendChild(CSS);
//-----------------------------CSS Done--------------------------


//--------------------------HTML------------------------------
var HTML = document.createElement('H4');
HTML.appendChild(document.createTextNode('HTML'));

var HTMLBar = document.createElement('div');
HTMLBar.setAttribute('class','bar rm-30');

var HTMLBarLevel = document.createElement('div');
HTMLBarLevel.setAttribute('class','progress');
HTMLBarLevel.setAttribute('style','width:60%;');

HTMLBar.appendChild(HTMLBarLevel);
HTML.appendChild(HTMLBar);

techSkillsInnerDiv.appendChild(HTML);
//-----------------------------HTML Done--------------------------

//--------------------------React------------------------------
var React = document.createElement('H4');
React.appendChild(document.createTextNode('React'));

var ReactBar = document.createElement('div');
ReactBar.setAttribute('class','bar rm-30');

var ReactBarLevel = document.createElement('div');
ReactBarLevel.setAttribute('class','progress');
ReactBarLevel.setAttribute('style','width:60%;');

ReactBar.appendChild(ReactBarLevel);
React.appendChild(ReactBar);

techSkillsInnerDiv.appendChild(React);
//-----------------------------React Done--------------------------

//--------------------------Redux------------------------------
var Redux = document.createElement('H4');
Redux.appendChild(document.createTextNode('Redux'));

var ReduxBar = document.createElement('div');
ReduxBar.setAttribute('class','bar rm-30');

var ReduxBarLevel = document.createElement('div');
ReduxBarLevel.setAttribute('class','progress');
ReduxBarLevel.setAttribute('style','width:80%;');

ReduxBar.appendChild(ReduxBarLevel);
Redux.appendChild(ReduxBar);

techSkillsInnerDiv.appendChild(Redux);
//-----------------------------Redux Done--------------------------

//--------------------------Mongo------------------------------
var Mongo = document.createElement('H4');
Mongo.appendChild(document.createTextNode('Mongo'));

var MongoBar = document.createElement('div');
MongoBar.setAttribute('class','bar rm-30');

var MongoBarLevel = document.createElement('div');
MongoBarLevel.setAttribute('class','progress');
MongoBarLevel.setAttribute('style','width:80%;');

MongoBar.appendChild(MongoBarLevel);
Mongo.appendChild(MongoBar);

techSkillsInnerDiv.appendChild(Mongo);
//-----------------------------Mongo Done--------------------------

//--------------------------Deployment------------------------------
var Deployment = document.createElement('H4');
Deployment.appendChild(document.createTextNode('Deployment'));

var DeploymentBar = document.createElement('div');
DeploymentBar.setAttribute('class','bar rm-30');

var DeploymentBarLevel = document.createElement('div');
DeploymentBarLevel.setAttribute('class','progress');
DeploymentBarLevel.setAttribute('style','width:80%;');

DeploymentBar.appendChild(DeploymentBarLevel);
Deployment.appendChild(DeploymentBar);

techSkillsInnerDiv.appendChild(Deployment);

//-----------------------------Deployment Done--------------------------

//------------------------------------------Append above ones to the above div-----------------------------
techSkillsInnerDiv.appendChild(document.createElement('br'));
//-----------------------------------------------Additional Skills Div---------------------------------------------

var additionalSkillsDiv = document.createElement('div'); //Append this to leftPart
additionalSkillsDiv.setAttribute('class','split-text');
var additionalSkillsHead = document.createElement('p');
additionalSkillsHead.setAttribute('class','skills-subheads content');
additionalSkillsHead.appendChild(document.createTextNode('Additional Skills'));
additionalSkillsDiv.appendChild(additionalSkillsHead);

additionalSkillsDiv.appendChild(brake);



//--------------------------Recruitment------------------------------
var Recruitment = document.createElement('H4');
Recruitment.appendChild(document.createTextNode('Recruitment'));

var RecruitmentBar = document.createElement('div');
RecruitmentBar.setAttribute('class','bar rm-30');

var RecruitmentBarLevel = document.createElement('div');
RecruitmentBarLevel.setAttribute('class','progress');
RecruitmentBarLevel.setAttribute('style','width:80%;');

RecruitmentBar.appendChild(RecruitmentBarLevel);
Recruitment.appendChild(RecruitmentBar);

additionalSkillsDiv.appendChild(Recruitment);
//-----------------------------Recruitment Done--------------------------


//--------------------------BusinessDevelopment------------------------------
var BusinessDevelopment = document.createElement('H4');
BusinessDevelopment.appendChild(document.createTextNode('Business Development'));

var BusinessDevelopmentBar = document.createElement('div');
BusinessDevelopmentBar.setAttribute('class','bar rm-30');

var BusinessDevelopmentBarLevel = document.createElement('div');
BusinessDevelopmentBarLevel.setAttribute('class','progress');
BusinessDevelopmentBarLevel.setAttribute('style','width:60%;');

BusinessDevelopmentBar.appendChild(BusinessDevelopmentBarLevel);
BusinessDevelopment.appendChild(BusinessDevelopmentBar);

additionalSkillsDiv.appendChild(BusinessDevelopment);
//-----------------------------BusinessDevelopment Done--------------------------

//--------------------------Editing------------------------------
var Editing = document.createElement('H4');
Editing.appendChild(document.createTextNode('Editing'));

var EditingBar = document.createElement('div');
EditingBar.setAttribute('class','bar rm-30');

var EditingBarLevel = document.createElement('div');
EditingBarLevel.setAttribute('class','progress');
EditingBarLevel.setAttribute('style','width:60%;');

EditingBar.appendChild(EditingBarLevel);
Editing.appendChild(EditingBar);

additionalSkillsDiv.appendChild(Editing);
//-----------------------------Editing Done--------------------------

//--------------------------Fundrising------------------------------
var Fundrising = document.createElement('H4');
Fundrising.appendChild(document.createTextNode('Fundrising'));

var FundrisingBar = document.createElement('div');
FundrisingBar.setAttribute('class','bar rm-30');

var FundrisingBarLevel = document.createElement('div');
FundrisingBarLevel.setAttribute('class','progress');
FundrisingBarLevel.setAttribute('style','width:80%;');

FundrisingBar.appendChild(FundrisingBarLevel);
Fundrising.appendChild(FundrisingBar);

additionalSkillsDiv.appendChild(Fundrising);
//-----------------------------Fundrising Done--------------------------


//----------------------------------------------Additional Skills Done.---------------------------------------------


//------------------------------------------------Work Experience - Left----------------------------------------------------
var workExperienceDiv = document.createElement('div');
var workIcon = document.createElement('i');
workIcon.setAttribute('class','fas fa-briefcase content-icons')
workExperienceDiv.appendChild(workIcon);
var workExperience = document.createElement('h2');
workExperience.setAttribute('class','attributes');
workExperience.appendChild(document.createTextNode('Work Experience'));
workExperienceDiv.appendChild(workExperience);

//---------------------------------------------------Event Manager -----------------------------------------------------
var eventManagerDiv = document.createElement('div');
var eventManagerHead = document.createElement('h2');
eventManagerHead.setAttribute('class','role');
eventManagerHead.appendChild(document.createTextNode('Event Manager'));
var date = document.createElement('div');
date.setAttribute('class','date');
date.appendChild(document.createTextNode('3/2014-2/2017'));
eventManagerHead.appendChild(date);
eventManagerDiv.appendChild(eventManagerHead);

var eventManagerDiscription = document.createElement('div');
var eventManagerDiscriptionlist = document.createElement('ul')
eventManagerDiscriptionlist.setAttribute('class','content');
var emdlist1 = document.createElement('li');
emdlist1.appendChild(document.createTextNode('Lead and execute all phases of event planning and production spanning committe recruitment, training, vendor relationships and on-site facilitation'));

var emdlist2 = document.createElement('li');
emdlist2.appendChild(document.createTextNode('Brought new business to the organization through rentless networking and stewardship which held the company win the bid for the state department summit on the middle east and, the companies largest civic even to date the united state of Women'));

var emdlist3 = document.createElement('li');
emdlist3.appendChild(document.createTextNode('Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.'));

eventManagerDiscriptionlist.appendChild(emdlist1);
eventManagerDiscriptionlist.appendChild(document.createElement('br'));
eventManagerDiscriptionlist.appendChild(emdlist2);
eventManagerDiscriptionlist.appendChild(document.createElement('br'));
eventManagerDiscriptionlist.appendChild(emdlist3);
eventManagerDiscription.appendChild(eventManagerDiscriptionlist);


workExperienceDiv.appendChild(eventManagerDiv);
eventManagerDiv.appendChild(eventManagerDiscription);
//--------------------------------------------------Event manager Done-------------------------------------------------

//---------------------------------------------------Work Experience - Left Done---------------------------------------------


skillsDiv.appendChild(skillIcon); //1.Icon
skillsDiv.appendChild(skillsHead); //2.Headding Skills
skillsInnerDiv.appendChild(techSkillsInnerDiv);
skillsDiv.appendChild(skillsInnerDiv); //3. Skills Level
leftPart.appendChild(skillsDiv);
leftPart.appendChild(additionalSkillsDiv);
leftPart.appendChild(workExperienceDiv); //4. Work Experience


//-------------------------------------------------------------------Left Part  Done.------------------------------------------------

//-------------------------------------------------------------------Right Part-------------------------------------------------------
var rightPart = document.createElement('div');
rightPart.setAttribute('class','split-right');  // Screen is split to 50% and Working on Right half.



//---------------------------------------------------------------------------Work Experience - Right--------------------------------------------
var workExperienceDivRight = document.createElement('div');
var workIcon = document.createElement('i');
workIcon.setAttribute('class','fas fa-briefcase content-icons')
workExperienceDivRight.appendChild(workIcon);
var workExperience = document.createElement('h2');
workExperience.setAttribute('class','attributes');
workExperience.appendChild(document.createTextNode('Work Experience'));
workExperienceDivRight.appendChild(workExperience);

//---------------------------------------------------Community Relations Manager -----------------------------------------------------
var communityRelationsManagerDiv = document.createElement('div');
var communityRelationsManagerHead = document.createElement('h2');
communityRelationsManagerHead.setAttribute('class','role');
communityRelationsManagerHead.appendChild(document.createTextNode('Community Relations Manager'));
var date = document.createElement('div');
date.setAttribute('class','date');
date.appendChild(document.createTextNode('6/2011-1/2014'));
communityRelationsManagerHead.appendChild(date);
communityRelationsManagerDiv.appendChild(communityRelationsManagerHead);

var communityRelationsManagerDiscription = document.createElement('div');
var communityRelationsManagerDiscriptionlist = document.createElement('ul')
communityRelationsManagerDiscriptionlist.setAttribute('class','content');
var crmdlist1 = document.createElement('li');
crmdlist1.appendChild(document.createTextNode('Designing a PR plan and establishing important focus points'));

var crmdlist2 = document.createElement('li');
crmdlist2.appendChild(document.createTextNode('Designing, creating and managing content across Multiple communications platforms.'));

var crmdlist3 = document.createElement('li');
crmdlist3.appendChild(document.createTextNode('Building relationships with key media players.'));

communityRelationsManagerDiscriptionlist.appendChild(crmdlist1);
communityRelationsManagerDiscriptionlist.appendChild(document.createElement('br'));
communityRelationsManagerDiscriptionlist.appendChild(crmdlist2);
communityRelationsManagerDiscriptionlist.appendChild(document.createElement('br'));
communityRelationsManagerDiscriptionlist.appendChild(crmdlist3);
communityRelationsManagerDiscription.appendChild(communityRelationsManagerDiscriptionlist);


workExperienceDivRight.appendChild(communityRelationsManagerDiv);
communityRelationsManagerDiv.appendChild(communityRelationsManagerDiscription);
//--------------------------------------------------Community Relations manager Done-------------------------------------------------

//----------------------------------------------------------------------------Work Experience - Right Done---------------------------------------------

//-----------------------------------------------------------------------------------Education-----------------------------------------------------------------------------------------------------------
var educationDiv = document.createElement('div');
var educationIcon = document.createElement('i');
educationIcon.setAttribute('class','fas fa-user-graduate content-icons')
educationDiv.appendChild(educationIcon);
var education = document.createElement('h2');
education.setAttribute('class','attributes');
education.appendChild(document.createTextNode('Education'));
educationDiv.appendChild(education);
//------------------------------------------------------------------------------------------------Engineering-------------------------------------------------------------------------------------------
var engineeringDiv = document.createElement('div');
var engineeringHead = document.createElement('h2');
engineeringHead.setAttribute('class','role');
engineeringHead.appendChild(document.createTextNode('Engineering Immersion Program'));
var date = document.createElement('div');
date.setAttribute('class','date');
date.appendChild(document.createTextNode('11/2018-6/2018'));
engineeringHead.appendChild(date);
engineeringDiv.appendChild(engineeringHead);

var engineeringDiscription = document.createElement('div');
var engineeringDiscriptionList = document.createElement('ul')
engineeringDiscriptionList.setAttribute('class','content');
var engdlist1 = document.createElement('li');
engdlist1.appendChild(document.createTextNode('Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript(MERN) technical stack'));

var engdlist2 = document.createElement('li');
engdlist2.appendChild(document.createTextNode('Developed a full-stack web application, "Renew U" using react that allows users to explore various aspects of meditation. User\'s progress is stored in a backend created using Node and MongoDB'));

var engdlist3 = document.createElement('li');
engdlist3.appendChild(document.createTextNode('Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. '));

var engdlist4 = document.createElement('li');
engdlist4.appendChild(document.createTextNode('Developed a concierg app, "pley",for individuals looking for curated suggestion when visiting a new place. React was used to develop the front end which includes real time chat, drag and drop and variety of advanced features. the backend build using node express, and MongoDb, takes advantage of well developed RESTful API, Geospatial searching and user authentication with JWT.'));

engineeringDiscriptionList.appendChild(engdlist1);
engineeringDiscriptionList.appendChild(document.createElement('br'));
engineeringDiscriptionList.appendChild(engdlist2);
engineeringDiscriptionList.appendChild(document.createElement('br'));
engineeringDiscriptionList.appendChild(engdlist3);
engineeringDiscriptionList.appendChild(document.createElement('br'));
engineeringDiscriptionList.appendChild(engdlist4);
engineeringDiscription.appendChild(engineeringDiscriptionList);


educationDiv.appendChild(engineeringDiv);
engineeringDiv.appendChild(engineeringDiscription);

//--------------------------------------------------------------------------------------------------Engineering - Done------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------BA English-------------------------------------------------------------------------------------------
var BAenglishDiv = document.createElement('div');
var BAenglishHead = document.createElement('h2');
BAenglishHead.setAttribute('class','role');
BAenglishHead.appendChild(document.createTextNode('BA English'));
var date = document.createElement('div');
date.setAttribute('class','date');
date.appendChild(document.createTextNode('09/2001-09/2005'));
BAenglishHead.appendChild(date);
BAenglishDiv.appendChild(BAenglishHead);

var university = document.createElement('p');
university.setAttribute('class','content');
university.appendChild(document.createTextNode('University of California, Los Angles'));

BAenglishDiv.appendChild(university);
educationDiv.appendChild(BAenglishDiv)
//-----------------------------------------------------------------------------------------------------BA - English Done----------------------------------------------------------------------------------


//------------------------------------------------------------------------------------Eduction - Done------------------------------------------------------------------------------------------------------


rightPart.appendChild(workExperienceDivRight)
rightPart.appendChild(educationDiv);


document.body.appendChild(leftPart);  // Left half of the screen is appended to the body.
document.body.appendChild(rightPart); // RIght half of the Screen is appended to the body..


