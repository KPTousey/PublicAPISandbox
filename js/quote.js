const quoteDiv = document.getElementById('quote');

fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "79f8f0f8bdmshd9ceccb6edd81dep18db50jsnfa726cdc8a04"
	}
})
.then(response => response.json())
.then(response => {
    console.log(response.content);
	console.log(response.originator.name);
    quoteDiv.innerHTML = `
    <p>${response.content}</p>
    <br>
    <p>${response.originator.name}</p>
`
})
.catch(err => {
	console.error(err);
});

// https://rapidapi.com/martin.svoboda/api/quotes15/