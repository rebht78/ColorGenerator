function showErrorMessage(elementId, errorMessage)
{
	elementId.innerHTML = errorMessage;
	elementId.style.display = "block";
}
function hideErrorMessage(elementIds)
{
	if (Array.isArray(elementIds))
	{
		elementIds.forEach(function(element) {
			element.style.display = "none";
		});
	}
	else
	{
		elementIds.style.display = "none";
	}
}
function setColor(elementId, colorArray)
{
	 var brightness = Math.round(((parseInt(colorArray[0]) * 299) +
                      (parseInt(colorArray[1]) * 587) +
                      (parseInt(colorArray[2]) * 114)) / 1000);
	 console.log(brightness);
  	var color = (brightness > 125) ? 'black' : 'white';

  	elementId.style.color= color;
}