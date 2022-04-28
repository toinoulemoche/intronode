//Le fichier .env permet d'instancier des variables d'environnements du
//projet, pour définir par ex la connexion à la BDD ou l'environnement local de travail

console.log("HELLO WORLD");

const mavariable = process.env["MAVARIABLE"];
console.log(mavariable);

const variablepasdef = process.env["VARIABLEPASDEF"];
console.log(variablepasdef);

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV == 'development'){
	console.log("JE SUIS EN DEVELOPEMENT");
}
else{
	console.log("JE SUIS EN PRODUCTION");
}
