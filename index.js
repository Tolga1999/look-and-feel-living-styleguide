document.querySelectorAll('li').forEach(link => {
    link.addEventListener('click', function () {
        // checkt de ul voor active anchor elementen, 'this' is in dit geval de anchors
        const active = this.parentNode.parentNode.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active');
    })
})
// ICons
const simpelIcons =[
    'https://joelle78.github.io/the-client-case/assets/plant.png',
    'https://joelle78.github.io/the-client-case/assets/growth.png',
    'https://joelle78.github.io/the-client-case/assets/trade.png',
    'https://joelle78.github.io/the-client-case/assets/excited.png',
    'https://joelle78.github.io/the-client-case/assets/heartbeat.png',
    'https://joelle78.github.io/the-client-case/assets/planet-earth.png',
    'https://joelle78.github.io/the-client-case/assets/support.png',
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
