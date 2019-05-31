module.exports = function main(num) {
	str1 = '._....._.._....._.._.._.._.._.';
	str2 = '|.|..|._|._||_||_.|_...||_||_|';
	str3 = '|_|..||_.._|..|._||_|..||_|..|';
	var strarr1 = new Array();
	var strarr2 = new Array();
	var strarr3 = new Array();
	//console.log(num.length);
	
	for (var i=0;  i<num.length; ++i) {
		strarr1.push(str1.substr(eval(num[i])*3, 3));
		strarr2.push(str2.substr(eval(num[i])*3, 3));
		strarr3.push(str3.substr(eval(num[i])*3, 3));
	}

	var s1 = strarr1.join(" ");
	var s2 = strarr2.join(" ");
	var s3 = strarr3.join(" ");
	var strarr = new Array();
	strarr.push(s1);
	strarr.push(s2);
	strarr.push(s3);
	var res = strarr.join("\n");
	res = res + '\n';
    return res;
};