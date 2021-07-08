const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hunter_College.jpg/215px-Hunter_College.jpg",
        address: "695 Park Ave, New York, NY 10065, USA",
		description: "Hunter College is one of the constituent colleges of the City University of New York, a public university in New York City."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard College",
        imageUrl: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/06/17/Pictures/_14494fd0-71d1-11e8-bbf6-b72314b60444.jpg",
        address: "University Hall, Cambridge, MA 02138",
		description: "Harvard College is the undergraduate college of Harvard University, an Ivy League research university in Cambridge, Massachusetts."
	}); 

	const dummy_student = await Student.create({
		firstName: "Joe",
        lastName: "Shmo",
        email: "abc@xyz.in",
        imageUrl: "https://www.realityblurred.com/realitytv/images/2018/09/joe-schmo-show-matt-kennedy-gould.jpg.webp",
        gpa: 3.5
	});

	await dummy_student.setCampus(dummy_campus);

	const dummy_student2 = await Student.create({
		firstName: "John",
        lastName: "Wick",
        email: "andy@continental.in",
        imageUrl: "https://lionsgate.brightspotcdn.com/96/9a/a990e63d45f1958f0a507625dc6e/john-wick-chapter-2-about-02.jpg",
        gpa: 2.4
	});

	const dummy_student3 = await Student.create({
		firstName: "Will",
        lastName: "Smith",
        email: "agentj@mib.in",
        imageUrl: "https://resizing.flixster.com/ZF-tEwJsxW7ep93yIWcVBdySbwk=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/1650/1650_v9_ba.jpg",
	});
	
}

module.exports = seedDB;