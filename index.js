document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        // checkt de ul voor active anchor elementen, 'this' is in dit geval de anchors
        let active = this.parentNode.parentNode.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active');
    })
})
// returned een nodelist met alle anchors erin
const anchorLists = document.querySelectorAll('a');

const options = {
    threshold: 0.1,
}

//  entries returned een array met alle oberserving elements
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // added return so it doesnt clip back
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry);
        // if(entry.target.id == 'header'){
        //     console.log('dit is de header')
        //     anchorLists[0].classList.add('active');
        // }else{
        //     anchorLists[0].classList.remove('active');
        // }
        switch (entry.target.id) {
            case 'header':
                anchorLists[0].classList.add('active');
                anchorLists[1].classList.remove('active');
                anchorLists[2].classList.remove('active');
                anchorLists[3].classList.remove('active');
                break;
            case 'logo':
                anchorLists[0].classList.remove('active');
                anchorLists[1].classList.add('active');
                anchorLists[2].classList.remove('active');
                anchorLists[3].classList.remove('active');
                break;
            case 'kleur':
                anchorLists[0].classList.remove('active');
                anchorLists[1].classList.remove('active');
                anchorLists[2].classList.add('active');
                anchorLists[3].classList.remove('active');
                break;
            case 'formulieren':
                anchorLists[0].classList.remove('active');
                anchorLists[1].classList.remove('active');
                anchorLists[2].classList.remove('active');
                anchorLists[3].classList.add('active');
                break;
        }
    });
}, options);

// dit is wat je wilt observeren (error zonder foreach, heeft te maken met nodelist queryselectorAll)
let sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// // functie wordt uitgevoerd wanneer je scrollt
// window.onscroll = function () {
//     console.log(window.scrollY);
//     if (window.scrollY > 480 && window.scrollY < 800) {
//        anchorLists[0].classList.add('active')
//     }else{
//         anchorLists[0].classList.remove('active')
//     }
// }

// ICons
const simpelIcons = [
    'https://buurtcampusoost.duneyasaleh.com/public/image/stekjes_ruilen.png',
    'https://buurtcampusoost.duneyasaleh.com/public/image/noun-planting-plant.png',
    'https://rosahoffer.github.io/the-client-case/assets/doneren.png',
    'https://rosahoffer.github.io/the-client-case/assets/open.png',
    'https://joelle78.github.io/the-client-case/assets/plant.png',
    'https://joelle78.github.io/the-client-case/assets/growth.png',
    'https://joelle78.github.io/the-client-case/assets/trade.png',
    'https://joelle78.github.io/the-client-case/assets/excited.png',
    'https://joelle78.github.io/the-client-case/assets/heartbeat.png',
    'https://joelle78.github.io/the-client-case/assets/planet-earth.png',
    'https://joelle78.github.io/the-client-case/assets/support.png',
    'https://static.thenounproject.com/png/703781-200.png',
    'https://starpng.com/public/uploads/preview/black-instagram-logo-png-11574831789epgjpjrwg6.png',
    'https://e7.pngegg.com/pngimages/415/155/png-clipart-telephone-computer-icons-phone-icon-template-miscellaneous-service.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ28bkpZt4qwcuNfoBt1DwUJ1vRRaOru3uVA&usqp=CAU',
    'https://e7.pngegg.com/pngimages/982/97/png-clipart-computer-icons-camera-iphone-graphy-camera-photography-camera-icon.png'
];

const iconsKader = document.getElementById('simpelIcon');

function fotoeen(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let mijnFoto = document.createElement('img');
    mijnFoto.src = url;
    mijnFoto.alt = 'ventie';
    item.append(mijnFoto);
    simpelIcon.append(item);
}
///met i-- kan ik beginnen van beneden naar boven 
for (let i = simpelIcons.length; i > 0; i--) {
    let num = Math.floor(Math.random() * simpelIcons.length);
    fotoeen(simpelIcons[num]);
    simpelIcons.splice(num, 1);
}