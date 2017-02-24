console.log($)


var url = 'https://openstates.org/api/v1/legislators/?state=dc&chamber=upper',
    legislatorsPromise = $.getJSON(url)



 function makeHTML(singleLegi) {
 	var getHTML = ''

 	getHTML += '<div class="legislator">'
 	getHTML += '<h4 class="full name">' + singleLegi.full_name + '</h4>'
 	getHTML += '<h5>' + singleLegi.party + '</h5>'  
 	getHTML += '<ul>'
 	getHTML += '<li> email:' + singleLegi.email + '</li>'
 	getHTML += '<li> phone:' + singleLegi.phone + '</li>'
 	getHTML += '<li> site:' + singleLegi.url + '</li>'
 	getHTML += '</ul>'
 	getHTML += '</div>'
 
    return getHTML	
 }



 function handleResponse(legislatorObj) {
 	var allLegisHTML = ''

 	var containerNode = document.querySelector('.container')
 	var legiArray = legislatorObj

 	for(var i = 0; i < legiArray.length; i ++) {
 		allLegisHTML += makeHTML(legiArray[i]) 
 	}
    
    containerNode.innerHTML = allLegisHTML

 }


legislatorsPromise.then(handleResponse)

