/*
declaration of variables and assigning value from TextBoxes
*/
var divBox = document.querySelector('.box');
var redColor = "";
var greenColor = "";
var blueColor = "";

/*
validate function to check whether input has been given by the user or not.
*/
function validate()
{

	if (!redColor || !greenColor || !blueColor)
	{
		return false;
	}
	return true;
}
// click listener to handle click on button - Show Color
function btnSubmitClickListener()
{
	redColor = document.getElementById('txtRedColor').value;
	greenColor = document.getElementById('txtGreenColor').value;
	blueColor = document.getElementById('txtBlueColor').value;
	//call to validate, if it returns true then call generateColor
	if (validate())
	{
		generateColor();
		return true;
	}
	else
	{
		alert("Please enter the value of Code");
		return false;
	}
}
// generateColor will assign to div - box style of background color and innerHTML
function generateColor()
{

	divBox.setAttribute("style", "background-color:#"+redColor+greenColor+blueColor);
	divBox.innerHTML = "#".concat(redColor).concat(greenColor).concat(blueColor);

}
// click listener to handle click on button - Reset Code
function btnResetClickListener()
{
	document.getElementById('txtRedColor').value = "";
	document.getElementById('txtGreenColor').value = "";
	document.getElementById('txtBlueColor').value = "";
	document.getElementById('txtRedColor')
	.setAttribute("placeholder", "Enter Red Color Code");
	document.getElementById('txtGreenColor')
	.setAttribute("placeholder", "Enter Green Color Code");
	document.getElementById('txtBlueColor')
	.setAttribute("placeholder", "Enter Blue Color Code");
	divBox.style.visibility = "hidden";
}
