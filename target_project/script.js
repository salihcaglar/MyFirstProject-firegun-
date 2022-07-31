const items = [
    {
        "name": "glock",
        "url": "glock.jpg",
        "sound": "glock.mp3"
    } , 
    {
        "name": "magnum",
        "url": "magnum.jpg",
        "sound": "magnum.mp3"
    } , 
    {
        "name": "groza",
        "url": "groza.jpg",
        "sound": "groza.mp3"
    } , 
    {
        "name": "kanas",
        "url": "kanas.jpg",
        "sound": "kanas.mp3"
    }
]

const targetArea = document.querySelector('.target-area');
const clearBtn = document.getElementById('clear');
let currentWeapon = undefined;
let sound = undefined;


items.forEach(item =>{
    const image = document.createElement('img');
    image.classList.add(item.name);
    image.classList.add('myimg');
    image.classList.add('opacity');
    image.src = item.url;

    const gunsDiv = document.querySelector('.guns');
    gunsDiv.appendChild(image);
});

const weapons = document.querySelectorAll('.myimg');
weapons.forEach(weapon=>{
    weapon.addEventListener('click',()=>{
        currentWeapon = weapon.classList[0];
        sound = new Audio(currentWeapon+'.mp3')
        weapons.forEach( weapon =>{
            weapon.classList.add('opacity');
        })
        weapon.classList.remove('opacity');
    })
})

window.addEventListener('click', playAll)

function playAll(e){
    if(!e.target.parentElement.classList.contains('guns')){
        if(currentWeapon) {
            let x = e.pageX;
            let y = e.pageY;
            const mark = document.createElement('img');
            mark.setAttribute('src','mark.jpg')
            mark.classList.add('marked')
            mark.style.left = x-10 +'px';
            mark.style.top = y-10 +'px';
            targetArea.appendChild(mark)
            sound = new Audio(currentWeapon+'.mp3')
            sound.play();
    }}
}

clearBtn.addEventListener('click',function(){
    const marked = document.querySelectorAll('.marked')
    marked.forEach(markedEach =>{
        markedEach.remove();
    })
});



