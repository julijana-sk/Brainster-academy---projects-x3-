// In general, the `location.href` property in JavaScript refers to the URL of the current webpage window. However, it is important to note that `location.href` may behave differently depending on where the code is executed.

// When you test your code on your local disk D (directly opening the HTML file in a browser), `location.href` will refer to the URL or file path on your local machine.

// On the other hand, when your project is uploaded to GitLab and accessed through a web browser, `location.href` will refer to the URL of the GitLab repository or the particular web page URL where your code is hosted.

// Therefore, the value of `location.href` can be different between your local machine (disk D) and the GitLab project, depending on where the JavaScript code is executed.

// Get the current URL:
// var currentURL = window.location.href;

// Set location.href value to current URL:
// location.href = currentURL;

// By doing this, the location.href value will be set to the current URL no matter where the project is opened from!!!


// const carouselImg = document.querySelector("#carousel-wrapper img");


// carouselImg.addEventListener('click', () => {
    // console.log('you clicked on an img from sliders')
//     location.href = "file:///d:/FRONT-END%20ACADEMY/PROJECTS/visitor-listing-page.html"
// });





// const backButton = document.querySelector("a .back");


// backButton.addEventListener('click', function () {
// let id = location.hash.split("/",[1]);
// id.textContent='#';
// //   backButton.setAttribute("href", "#");
// //   backButton.classList.add("waves-effect", "waves-light", "btn", "orange");
// //   console.log('you klicked me')
// })