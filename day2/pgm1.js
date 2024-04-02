let salary=10000;
let userName="Boys";
console.log(`The Employee ${userName} and has the salary ${salary}.`);

let gameName=new String("Good Morning Bengaluru");
let gamer="        Rockey        "
console.log(gameName);//[String: 'Good Morning Bengaluru']
console.log(typeof gameName);//object
console.log(userName[0]);//B
console.log(gameName[0]);//G
console.log(gameName.__proto__);//{}
console.log(gameName.length)//22
console.log(gameName.toUpperCase())//GOOD MORNING BENGALURU
console.log(gameName.toLowerCase())//good morning bengaluru
console.log(gameName.split("a"));//[ 'Good Morning Beng', 'luru' ]
console.log(gameName.charAt(0))//G
console.log(gameName.indexOf("l"))//18
console.log(gameName.replace("G","M"))//Mood Morning Bengaluru
console.log(gameName.concat(" "+userName))//Good Morning Bengaluru Boys
console.log(gameName.startsWith("V"))//false
console.log(gameName.endsWith("i"))// false
console.log(gameName.slice(3))//d Morning Bengaluru
console.log(gameName.substring(7,14))//rning B
console.log(gamer.trim())//Rockey
console.log(gameName.includes("Good"));//true

