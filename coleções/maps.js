const getAdmins = (map) => {
	let admins = [];


    // usando for of
	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

usuarios.set('Alex', 'ADMIN');
usuarios.set('Monique', 'ADMIN');
usuarios.set('Lara', 'ADMIN');
usuarios.set('Bruno', 'USER');
usuarios.set('Aline', 'USER');

console.log(getAdmins(usuarios));