let pata = [
    {
        nav: {
            links:"<div class='rp'> <nav> <ul> <li> Home </li> <li>About</li> </ul> </nav> </div>",
            logo: " <img src='https://vanillalifetime.netlify.app/img/work1.jpg'>  "
        }
    } 
];

const reo = document.querySelector('.ept')



let kepa = pata.map(function(e){
    return "<div class='content'>" + e.nav.links + "</div>"; 
});

reo.innerHTML = kepa.join('\n');