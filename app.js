// JavaScript source code

const cookieList = document.querySelector("#c1");
const cookieList2 = document.querySelector("#c2");
const cookieList3 = document.querySelector("#c3");
let position = 1;
let pages = 3;
let myColor = ["navajowhite", "cornflowerblue", "lightskyblue"];

for (let i = 0; i < 12; i++) {
    const cookies = document.createElement('img');
    const cookies2 = document.createElement('img');
    const cookies3 = document.createElement('img');

    cookies.src = `cookies/cookie (${i % 6 + 1}).png`;
    cookies.style.width = "140px";
    cookies.style.height = "180px";
    cookieList.appendChild(cookies);
    cookies.addEventListener('click', hideCookie);

    cookies2.src = `cookies/cookie (${i % 6 + 7}).png`;
    cookies2.style.width = "140px";
    cookies2.style.height = "180px";
    cookieList2.appendChild(cookies2);
    cookies2.addEventListener('click', hideCookie);

    cookies3.src = `cookies/cookie (${i % 6 + 6}).png`;
    cookies3.style.width = "140px";
    cookies3.style.height = "180px";
    cookieList3.appendChild(cookies3);
    cookies3.addEventListener('click', hideCookie);

    if ((i + 1) % 4 === 0) {
        cookieList.appendChild(document.createElement('hr'));
        cookieList2.appendChild(document.createElement('hr'));
        cookieList3.appendChild(document.createElement('hr'));
    }
}

let cookieListArr = [cookieList, cookieList2, cookieList3];


function goLeft() {
    if (position !== 1) {
        position -= 1;
        cookieListArr[position].classList.toggle('cookieList2');
        cookieListArr[position - 1].classList.toggle('cookieList2');


        cookieListArr.forEach((element) => {
            changeColor(position - 1);
        });



        document.querySelector("#pagenumber").innerText = `Page ${position}`;
    }
}

function goRight() {
    if (position !== 3) {
        position += 1;

        cookieListArr[position - 2].classList.toggle('cookieList2');
        cookieListArr[position - 1].classList.toggle('cookieList2');

        cookieListArr.forEach((element) => {
            changeColor(position-1);
        });

        document.querySelector("#pagenumber").innerText = `Page ${position}`;
    }
}


function hideCookie(event) {
    event.target.classList.toggle('cookieListHidden');
}

function changeColor(position) {
    cookieListArr.forEach((element) => {

        element.style.backgroundColor = myColor[position];
    });

}


document.getElementById('leftbutton').addEventListener('click', goLeft);
document.getElementById('rightbutton').addEventListener('click', goRight);
document.getElementById('changecolor').addEventListener('click', () => {
    cookieListArr.forEach((element) => {
        element.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    });
});





let points = 0;
// POINTS GAME
let getPoints = () => {
    alert("0");
    points += 1;
    alert("1");
    document.querySelector("#cookiePoints").innerHTML = "asd";
    alert("2");
}
document.querySelector('#cookieButton').addEventListener('click', getPoints);

