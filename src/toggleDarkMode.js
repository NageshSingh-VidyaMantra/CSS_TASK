const htmlTag = document.getElementsByTagName('html')[0];
const toggleDarkMode = document.getElementById('toggleDarkMode')
const toggleMe = document.getElementById('toggleMe')
const toggleClass = toggleMe.classList;


toggleDarkMode.addEventListener('click', () => {
    htmlTag.classList.toggle("dark");
    console.log(toggleClass)
    if (toggleClass[toggleClass.length - 1] === "fa-sun") {
        toggleClass.remove("fa-sun")
        toggleClass.add("fa-moon")
    }else{
        toggleClass.add("fa-sun")
        toggleClass.remove("fa-moon")
    }
})