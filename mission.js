const themeSelector = document.querySelector
function changeTheme(){
    if(theme == "light")
        theme = "dark"
    else
        theme = "light"
}
themeSelector.addEventListener('change', changeTheme);