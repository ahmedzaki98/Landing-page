/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const sectionArray = Array.prototype.slice.call(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

if (sections.length > 0) {
    sectionArray.map((section) => {
        //creat a list 
        const list = document.createElement('li');
        //creat a link
        const link = document.createElement('a');
        //get the name of the section
        const secName = section.getAttribute('data-nav');
        //get the id of the section
        const secId = section.getAttribute('id');
        //give name to every link
        link.textContent = secName;
        link.setAttribute('href', secId);
        //add style class
        link.classList.add('menu__link');
        //add listener to scroll when sction clicked
        link.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            });
        });
        //append links to the list
        list.appendChild(link);
        //append list to the fragment
        fragment.appendChild(list)
    });
};
//append fragment to our navbar_list 
navBarList.appendChild(fragment);


const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.toggle('your-active-class');
    } else {
        //activeLink.remove('active');
        entries[0].target.classList.remove('your-active-class');
    }
}, {
    threshold: 0.8,
    rootMargin: '0px',
});

window.addEventListener('scroll', (section) => {
    sections.forEach((section) => {
        observer.observe(section);
        // console.log(section);
        // console.log(section.id);
    });
});


