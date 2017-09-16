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