let headone = document.querySelector('h1');
let container = document.getElementById('container');
let newscreen = document.getElementById('zoom-image');
let href = "image/";

container.addEventListener('mousemove', function () {

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    container.style.backgroundColor = `rgb(${r},${g},${b})`;
});


for (let i = 1; i < 12; i++) {
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent="center";



    const imitem = document.createElement('div');
    imitem.className = 'item';
    imitem.id = `item${i}`;
    imitem.style.cursor = "zoom-in";



    imitem.addEventListener('mouseenter', function (e) {

        newimg.style.border = '2px solid cyan';


        newimg.style.transition = 'width 2s, height 2s, transform 2s';
        newimg.style.width='300px';
        newimg.style.height='300px';
        newimg.style.transform = 'rotate(360deg)';

    });
    imitem.addEventListener('mouseleave', function (e) {

        newimg.style.border = '2px solid white';
        newimg.style.transition = 'width 1s, height 1s, transform 1s';

        newimg.style.width='150px';
        newimg.style.height='150px';
        newimg.style.transform = 'rotate(0deg)';


    });

    imitem.style.margin = '15px';
    imitem.style.padding = '20px';

    imitem.style.borderRadius = '30%';



    const num = document.createElement('span');
    num.innerText = `${i}`;


    let newimg = document.createElement('img');
    newimg.src = `${href}${i}.jpg`;
    newimg.height = 150;
    newimg.width = 150;
    newimg.style.borderRadius = '0 30px';
    newimg.style.border = '2px solid white';

    // newimg.addEventListener('click', function (e) {

    //     newscreen.style.display = 'block';
    //     newscreen.style.display = 'flex';
    //     newscreen.style.alignItems='center';
    //     newscreen.style.justifyContent='center';

    //     container.style.display = 'none'

    //     const imgitem = document.createElement('div');

    //     // newscreen.style.border='3px solid yellow';
    //         // newscreen.style.transition = 'width 1s, height 1s, transform 1s';
    //         // newscreen.style.width='300px';
    //         // newscreen.style.height='300px';
    //         // newscreen.style.transform = 'rotate(360deg)';

    //     let neww = document.createElement('img');

    //     neww.src = `${href}${i}.jpg`;
    //     neww.height = 450;
    //     neww.width = 450;
    //     neww.style.borderRadius="50px";



    //     imgitem.appendChild(neww);
    //     newscreen.appendChild(imgitem);
    // });


    // newimg.addEventListener('click', function (e) {

    //     newimg.style.transition = 'width 1s, height 1s, transform 1s';
    //     newimg.style.width='300px';
    //     newimg.style.height='300px';
    //     newimg.style.transform = 'rotate(360deg)';

    //     // newimg.style.


    // });


    imitem.appendChild(newimg);
    imitem.appendChild(num);
    container.appendChild(imitem);


    // container.appendChild(newimg);
}