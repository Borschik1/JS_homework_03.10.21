let fs = require('fs');
let arg = process.argv;
let alph = new Array();
let inputData;
let i = 0, count = 0;
let entropy = 0;

inputData = fs.readFileSync('input.txt');
inputData = inputData.toString();

for (i = 0; i < inputData.length; i++) {
	alph[inputData.charAt(i)] = 0;
}
for (i = 0; i < inputData.length; i++) {
	alph[inputData.charAt(i)]++;
}

for (i in alph) {
	alph[i] /= inputData.length;
	count++;
}
if (count == 1 || count == 0) {
	entropy = 0;
} else {
	for (i in alph) {
		entropy -= alph[i] * (Math.log10(alph[i]) / Math.log10(count));
	}
}

console.log(entropy);