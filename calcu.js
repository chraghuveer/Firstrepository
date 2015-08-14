var op1 = "";
var op2 = "";
var res = "";
var res1 =0;
var sec = false;
var thi = false;
var flag = false;
var func ="";

function func1(){
	flag = false;
	console.log("1");
	if(sec===true){
		op2=op2 + 1;
		console.log(op2);
	}

	else{
		op1=op1 + 1;
		console.log(op1);
	}
}
function func2(){
	flag = false;
	console.log("2");
	if(sec===true){
		op2=op2 + 2;
		console.log(op2);
	}

	else{
		op1=op1 + 2;
		console.log(op1);
	}

}
function func3(){
	flag = false;
	console.log("3");
	if(sec===true){
		op2=op2 + 3;
		console.log(op2);
	}

	else{
		op1=op1 + 3;
		console.log(op1);
	}
}
function func4(){
	flag = false;
	console.log("4");
	if(sec===true){
		op2=op2 + 4;
		console.log(op2);
	}

	else{
		op1=op1 + 4;
		console.log(op1);
	}
}
function func5(){
	flag = false;
	console.log("5");
	if(sec===true){
		op2=op2 + 5;
		console.log(op2);
	}

	else{
		op1=op1 + 5;
		console.log(op1);
	}
}
function func6(){
	flag = false;
	console.log("6");
	if(sec===true){
		op2=op2 + 6;
		console.log(op2);
	}

	else{
		op1=op1 + 6;
		console.log(op1);
	}
}
function func7(){
	flag = false;
	console.log("7");
	if(sec===true){
		op2=op2 + 7;
		console.log(op2);
	}

	else{
		op1=op1 + 7;
		console.log(op1);
	}
}
function func8(){
	flag = false;
	console.log("8");
	if(sec===true){
		op2=op2 + 8;
		console.log(op2);
	}

	else{
		op1=op1 + 8;
		console.log(op1);
	}
}
function func9(){
	flag = false;
	console.log("9");
	if(sec===true){
		op2=op2 + 9;
		console.log(op2);
	}

	else{
		op1=op1 + 9;
		console.log(op1);
	}
}
function func0(){
	flag = false;
	console.log("0");
	if(sec===true){
		op2=op2 + 0;
		console.log(op2);
	}

	else{
		op1=op1 + 0;
		console.log(op1);
	}
}
function func10(){
	flag = false;
	console.log(".");
	if(sec===true){
		op2=op2 + ".";
		console.log(op2);
	}

	else{
		op1=op1 + ".";
		console.log(op1);
	}
}
function funcadd(){
	
	func = "add";
	console.log("add");
	if(sec===false && thi!==true){
		sec = true;
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationadd();

		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationadd();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationadd();
        sec = false;
        op1 ="";
        op2 ="";
		}
}
function funcsub(){
	
	func = "sub";
	console.log("sub");
	if(sec===false && thi!==true){
		sec = true;
		func = "sub";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationsub();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationsub();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationsub();
        sec = false;
        op1 ="";
        op2 ="";
		}
}
function funcmul(){
	
	func = "mul";
	console.log("mul");
	if(sec===false && thi!==true){
		sec = true;
		func = "mul";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationmul();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationmul();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationmul();
        sec = false;
        op1 ="";
        op2 ="";
		}
}
function funcdiv(){
	
	func = "div";
	console.log("div");
   	if(sec===false && thi!==true){
		sec = true;
		func = "div";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		
        flag =true;
		operationdiv();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationdiv();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationdiv();
        sec = false;
        op1 ="";
        op2 ="";
		}


}




function funcequal(){
	console.log("equals");
	if(flag===true){
		res = parseFloat(res);
		console.log(res);
	}

	else{
		finaloperation();
	}
}




function funcac(){
	console.log("AC");
    operationclear();
}



function operationadd(){

if(res===""){
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = parseFloat(res);
res = res+res1;
console.log(parseFloat(res));
}
}





function operationsub(){
if(res===""){
res1 = (parseFloat(op1) || 0)-(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(res) || 0)-(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));
}
}





function operationmul(){
if(res===""){
res1 = (parseFloat(op1) || 0)*(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(res) || 0)*(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));
}
}





function operationdiv(){
if(res===""){
res1 = (parseFloat(op1) || 0)/(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(res) || 0)/(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));
}
}





function operationclear(){
	sec = false;
	thi = false;
	op1 = "";
	op2 = "";
	res = "";
	res1 = 0;
	func ="";
	flag = false;
}




function finaloperation(){

	switch (func) {
    case "add":
        res1 = (parseFloat(res) || 0)+(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    case "sub":
        res1 = (parseFloat(res) || 0)-(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    case "mul":
        res1 = (parseFloat(res) || 0)*(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    case "div":
        res1 = (parseFloat(res) || 0)/(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    }
    sec = false;
    op1 = "";
    op2 = "";
    res1 = 0;
    func = "";
    flag = false;
}
