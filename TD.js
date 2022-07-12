let fn = "David";
let mn = "O.G";
let ln = "Olanrewaju"

var ability;
const v = true;

if (ability>=23 && v===true){
    console.log("Good to go");
}else{
    console.log("gettat");
}

ability = 29;

if (ability>=23 || v===true){
    console.log("Good to go");
    return "Good to go";
}else{
    console.log("gettat");
    return "gettat";
}

ability =12;

if (ability>=23){
    console.log("Good to go");
}else{
    console.log("gettat");
}



function sayIt(){
    console.log("hi everyone");
};
sayIt();

const shoutOut = "skrrrr";
const shoutee = "tunde"

var kud = function shoutIt(who){
    console.log("skrrrrrrrrrrrrr!" + who);
};
kud("baby");

function shr (shoutOut, shoutee){
    return shoutOut + shoutee;
};

const e = [apple, mongoe, banana, soursop];
console.log(typeof e); 
console.log(e[2]);

function getRandomDomain (domain){
    console.log("your new Email is " + domain + "@gmail.com");
}
let exDomain = "dheveed345";
getRandomDomain(exDomain);

