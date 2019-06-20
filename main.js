//Smooth scrolling starts.
$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            console.log(hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
//Drop-down menu.
//Toggle menu by clicking button - working!
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}
//Collapse menu after clicking outside the menu area - not working!
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        const dropdowns = document.getElementsByClassName(dropdown-content);
        
        for (let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}