var grade= 80;
console.log("Grade: " + grade);// regukar one-d objects

var grades = [80, 60, 75, 85] //this is called array
console.log("Grades: " + grades[0]);
var names= ["Paul", "Pam", "Peter", "Pauline"];
console.log(names[0] + "has: " + grades[0]); 
var images = {
	url: "sjfjdnf.jpg", caption "Some caption";
}

var images = [
	{url: "http://fillmurray.com/400/400", caption "image1"}
	{url: "http://fillmurray.com/400/400", caption "image2"}
	{url: "http://fillmurray.com/400/400", caption "image3"}
]
//array of images
console.log(images[2].caption );
//gives caption to the 2 image
console.log( images.length )

// loop through the array
var index = images.length - 1 //starts with a [0]

for (var index = 0; index < images.length; index = index + 1)
{
	console.log( images[index].caption); //[index]=[0]
	$('<img>').attr('src', images[index].url).appendTo('#gallery');
	$('<p>').text(images[index].caption).appendTo('#gallery');
}
}




