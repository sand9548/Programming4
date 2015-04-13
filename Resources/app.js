var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});

var win1 = Titanium.UI.createWindow({  
    title:'Profile',
    backgroundImage:'/Images/wood-light.jpg'
});

var label1 = Titanium.UI.createLabel({
	color:'#354696',
	text:'Everett Boker',
	font:{fontSize:35,fontWeight:'Bold',fontFamily:'Serif'},
	textAlign:'center',
	top:'25',
	width:'auto'
});

win1.add(label1);

var headShot = Ti.UI.createImageView({
	image:'/Images/headShot.jpg',
	top:'65',
	height:'30%',
	width:'45%',
	imageAlign:'center'
});

win1.add(headShot);

var label2 = Titanium.UI.createLabel({
	text:'Title',
	color:'#000000',
	font:{fontSize:15,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'220',
});

win1.add(label2);

var label3 = Titanium.UI.createLabel({
	text:'VP Finance - Beta Theta Pi',
	color:'#000000',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'238',
});

win1.add(label3);

var label4 = Titanium.UI.createLabel({
	text:'Phone',
	color:'#000000',
	font:{fontSize:15,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'258',

});

win1.add(label4);

var label5 = Titanium.UI.createLabel({
	text:'(425) 577-4755',
	color:'#000000',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'276',
});

win1.add(label5);

var label6 = Titanium.UI.createLabel({
	text:'Email',
	color:'#000000',
	font:{fontSize:15,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'296',
});

win1.add(label6);

var label7 = Titanium.UI.createLabel({
	text:'everettboker@live.com',
	color:'#000000',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'314',
});

win1.add(label7);

var label8 = Titanium.UI.createLabel({
	text:'Attending',
	color:'#000000',
	font:{fontSize:15,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'334',

});

win1.add(label8);

var label9 = Titanium.UI.createLabel({
	text:'University of Idaho',
	color:'#000000',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'352',
});

win1.add(label9);

var label10 = Titanium.UI.createLabel({
	text:'Majors',
	color:'#000000',
	font:{fontSize:15,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'372',
});
win1.add(label10);

var label11 = Titanium.UI.createLabel({
	text:'Finance and Operations Management',
	color:'#000000',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'390',
});

win1.add(label11);


var nav1 = Ti.UI.createButton({
	title:'Portfolio',
	color:'#354696',
	backgroundColor:'#e8e9db',
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'100%',
	top:'437',
});

win1.add(nav1);

nav1.addEventListener('click', function() {
	win2.open();
});


WinView.add(win1);



var win2 = Titanium.UI.createWindow({  
    title:'Portfolio',
    backgroundColor:'#e8e9db'
});

var label12 = Titanium.UI.createLabel({
	color:'#354696',
	text:'Everett Boker',
	font:{fontSize:35,fontWeight:'Bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'25',
	width:'auto'
});
win2.add(label12);

var label13 = Titanium.UI.createLabel({
	text:'727 Elm St. Moscow, ID 83843',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	top:'62',
});
win2.add(label13);



var label15 = Titanium.UI.createLabel({
	text:'Experience:',
	color:'#354696',
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'10',
	top:'80',
});
win2.add(label15);

var label16 = Titanium.UI.createLabel({
	text:'VP Finance - Beta Theta Pi 			(Present)',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'105',
});
win2.add(label16);

var label17 = Titanium.UI.createLabel({
	text:'Creating and controlling a $250,000 budget while managing the outflow of money to minimize unneeded costs.',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'120',
});
win2.add(label17);

var label18 = Titanium.UI.createLabel({
	text:"ASUI Senator 			   	 (Dec.'13 - Jan.'15)",
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'140',
});
win2.add(label18);

var label19 = Titanium.UI.createLabel({
	text:'Passing bills and resolutions to better the student experiance on campus in addition to representing several living groups through acting as their liaison to student government. ',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'155',
});
win2.add(label19);

var label20 = Titanium.UI.createLabel({
	text:'Education:',
	color:'#354696',
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'10',
	top:'190',
});
win2.add(label20);

var label21 = Titanium.UI.createLabel({
	text:'University of Idaho - Sophomore',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'215',
});
win2.add(label21);

var label32 = Titanium.UI.createLabel({
	text:'Finance and Operations Management Dual Major - 4.0 GPA',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'230',
});
win2.add(label32);

var label22 = Titanium.UI.createLabel({
	text:'Redmond High School - 2010-2013',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'243',
});
win2.add(label22);

var label33 = Titanium.UI.createLabel({
	text:'Graduated with Honors - 4.0 GPA',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'258',
});
win2.add(label33);

var label23 = Titanium.UI.createLabel({
	text:'Skills:',
	color:'#354696',
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'10',
	top:'277',
});
win2.add(label23);

var label24 = Titanium.UI.createLabel({
	text:'Drive for Success',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'302',
});
win2.add(label24);

var label25 = Titanium.UI.createLabel({
	text:'High level of self expectation to achieve success in educational and professional settings',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'317',
});
win2.add(label25);

var label26 = Titanium.UI.createLabel({
	text:'Leadership',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'338',
});
win2.add(label26);

var label27 = Titanium.UI.createLabel({
	text:'Talent for naturally taking charge and effectively leading a team to achieve a common goal',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'35',
	top:'353',
});
win2.add(label27);

var label28 = Titanium.UI.createLabel({
	text:'Communication',
	color:'#000000',
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'20',
	top:'374',
});
win2.add(label28);

var label29 = Titanium.UI.createLabel({
	text:'Good verbal and written presentation skills. Experience in business presentations',
	color:'#000000',
	font:{fontSize:8,fontWeight:'bold',fontFamily:'Sans Serif'},
	left:'25',
	top:'389',
});
win2.add(label29);





//////////////////////////////////////////////////////////////////////////////////////////////







var fb = require('facebook');
fb.appid = '377553195762812';
fb.permissions = ['publish_stream']; // Permissions your app needs
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});
fb.authorize();

function facebookScreenshot(data) {
	// construct the photo object
	var thePhoto = {
    		message: "Everett's Portfolio",
    		picture: data
	};
	Ti.Facebook.requestWithGraphPath('me/photos', thePhoto, 'POST', function(e){
	    if (e.success) {
	        alert("Success!  From FB: " + e.result);
	    } else {
	        if (e.error) {
	            alert(e.error);
	        } else {
	            alert("Unknown result");
	        }
	    }
	});
}

function captureScreenForFacebook() {
	Ti.Media.takeScreenshot(function(e)
	{
		// The media property of the object passed in contains the screenshot
		facebookScreenshot(e.media);

	});
}

var facebookBtn = Ti.UI.createButton({
	title:'Share my Profile via Facebook!',
	bottom:'30',
	width:'90%',
	font:{fontSize:17,fontFamily:'Helvetica'},
});

facebookBtn.addEventListener('click', function(e) {
	//
	captureScreenForFacebook();
});

win2.add(facebookBtn);


var nav2 = Ti.UI.createButton({
	title:'Contact Info',
	color:'#e8e9db',
	backgroundColor:'#354696',
	font:{fontSize:18,fontWeight:'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'55%',
	bottom:'0',
	height:'20',
});

win2.add(nav2);

nav2.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	win2.close();
});


win1.open();

