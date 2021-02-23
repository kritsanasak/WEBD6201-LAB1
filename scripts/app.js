// DOM Manipulation Basic
// Name: Mr. Kritsanasak Poungchan
// ID: 391927017


(function(){
    function start(){
        // Write text for check working 
        console.log("App Started...");
        // find products element then assign to navProducts variable
        let navProducts = document.getElementById('navProducts');
        // assign html text for Project element
        let navProjects = '<a class="nav-link" href="#"><i class="fas fa-th"></i> Projects</a>';
        // change menu products to projects
        navProducts.innerHTML = navProjects;

        // create <li></li> element
        let navHumanResource = document.createElement('li');
        // set attribute for <li> element
        navHumanResource.setAttribute('id',"navHumanResource");
        navHumanResource.setAttribute('class', 'nav-item');
        // assign html text for <li> </li> element
        navHumanResource.innerHTML = '<a class="nav-link" href="#"><i class="fas fa-user-friends"></i> Human Resource</a>';
        // find parent of element <li>
        let mainNav = document.getElementById('mainNav');
        // find element for insert before
        let navAboutUs = document.getElementById('navAboutUs');
        // console.log(mainNav);
        mainNav.insertBefore(navHumanResource, navAboutUs);
        // mainNav.insertAdjacentElement("beforeend",navHumanResource);
    }
    window.addEventListener('load', start);
})();