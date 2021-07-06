const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
        imageUrl: "https://i.insider.com/5d498e5e100a2422b830c8f7?width=750&format=jpeg&auto=webp",
        address: "Street City State Country",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
        imageUrl: "https://i.insider.com/5d498e5e100a2422b830c8f7?width=750&format=jpeg&auto=webp",
        address: "Street City State Country",
		description: "This is a school in MA."
	}); 

	const dummy_student = await Student.create({
		firstName: "Joe",
        lastName: "Shmo",
        email: "abc@xyz.in",
        imageUrl: "https://i.insider.com/5d498e5e100a2422b830c8f7?width=750&format=jpeg&auto=webp",
        gpa: 3.5
	});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;