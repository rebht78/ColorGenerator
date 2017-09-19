/*
declaration of variables and assigning value from TextBoxes
*/
var divBox = document.querySelector('.box');
var redColor = "";
var greenColor = "";
var blueColor = "";
var redErrSpan = document.querySelector('#redErrMessage');
var blueErrSpan = document.querySelector('#blueErrMessage');
var greenErrSpan = document.querySelector('#greenErrMessage');
var colorArray = [];
var errorSpanArray = [redErrSpan, blueErrSpan, greenErrSpan];

/*
validate function to check whether input has been given by the user or not.
*/
function validate()
{

	if (!redColor)
	{
		showErrorMessage(redErrSpan,"Red Color Code should not be left blank!");
		return false;
	}
	else if (isNaN(redColor))
	{
		showErrorMessage(redErrSpan,"Red Color Code should be a number");
		return false;
	}
	if (!greenColor)
	{
		showErrorMessage(greenErrSpan,"Green Color Code should not be left blank!");
		hideErrorMessage(redErrSpan);
		return false;
	}
	else if (isNaN(greenColor))
	{
		showErrorMessage(greenErrSpan,"Green Color Code should be a number");
		return false;
	}
	if (!blueColor)
	{
		showErrorMessage(blueErrSpan,"Blue Color Code should not be left blank!");
		hideErrorMessage(greenErrSpan);
		return false;
	}
	else if (isNaN(blueColor))
	{
		showErrorMessage(blueErrSpan,"Blue Color Code should be a number");
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
		hideErrorMessage(errorSpanArray);
		generateColor();

		return true;
	}
	return false;
}
// generateColor will assign to div - box style of background color and innerHTML
function generateColor()
{
	divBox.style.backgroundColor = 'rgb('+redColor+','+greenColor+','+blueColor+')';
	colorArray.push(redColor);
	colorArray.push(greenColor);
	colorArray.push(blueColor);
	setColor(divBox,colorArray);
	divBox.innerHTML = "<p>Color combination is "+redColor+", "+greenColor+", "+blueColor+"</p>";
	// divBox.innerHTML = "#".concat(redColor).concat(greenColor).concat(blueColor);
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
	hideErrorMessage(errorSpanArray);
}