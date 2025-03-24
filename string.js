const name = "Arman Ali ";
const repoCount = 50;

console.log(name + repoCount);// outdated
console.log(`My name is ${name} and my repo count ${repoCount}`);

const url = 'arman%100ali%100ghursay%100com';
console.log(url.replace('%100',''));
console.log(url.charAt(5));
console.log(url.charCodeAt(2));
console.log(url.indexOf('h'));
console.log(url.slice(0,10));
console.log(url.replaceAll('%100', ' '));




