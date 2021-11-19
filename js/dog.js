const dog = document.getElementById('dog');

// let url = 'https://dog.ceo/api/breed/Whippet/images/random';
let url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
.then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post.message);
    dog.innerHTML = `<img src="${post.message}" alt="dog picture" class="dogPic">`;
    });


    dog.innerText = "connected";