function isSameType(value1, value2) {
  //your js code here
	if(value1===value2 || value1==Nan && value2=Nan) return true;
	return false;
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
