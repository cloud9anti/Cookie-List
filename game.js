// JavaScript source code

let points = 9;
let clickValue = 1;
let nextCookie = 0;
// POINTS GAME


//load session storage
if (sessionStorage.length != 0) {
    //clickValue = parseInt(sessionStorage.getItem("clickValue"));
    //points = parseInt(sessionStorage.getItem("points"));
}







let rainbow = () => {
    let r = ''
    for (let i = 0; i < 7; i++) {

    }
}
let getPoints = () => {

    points += clickValue;

    //jelly cost minus jellies owned divided by jps
    let jellyLeft = Math.floor((cookieItemList[nextCookie].cost - points) / clickValue);

    // check if the measurement of time should be minutes
    if (jellyLeft >= 120) {
        jellyLeft = Math.floor(jellyLeft / 60);
        document.querySelector("#jellytime").innerText = "minutes!";

        // check if the measurement of time should be hours
        if (jellyLeft >= 120) {
            jellyLeft = Math.floor(jellyLeft / 60);
            document.querySelector("#jellytime").innerText = "hours!";
        }
    } else {
        document.querySelector("#jellytime").innerText = "seconds!";
    }

    //Make 0 the minimum amount of remaining time
    if (jellyLeft <= 1) jellyLeft = 0;


    document.querySelector("#cookiepoints").innerText = points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector("#jps").innerText = clickValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector("#jellyleft").innerText = jellyLeft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

}


cookieItemList = [
    {
        cost: 20,
        used: 0,
        addup: 3,
        IDName: "#buy20",
        src: "cookies/cookie (5).png",
        color: "pink"
    },
    {
        cost: 200,
        used: 0,
        addup: 6,
        IDName: "#buy200",
        src: "cookies/cookie (3).png",
        color: "sandybrown"
    },
    {
        cost: 2000,
        used: 0,
        addup: 5,
        IDName: "#buy2000",
        src: "cookies/cookie (4).png",
        color: "white"
    },
    {
        cost: 20000,
        used: 0,
        addup: 5,
        IDName: "#buy20000",
        src: "cookies/cookie (6).png",
        color: "yellowgreen"
    },
    {
        cost: 200000,
        used: 0,
        addup: 5,
        IDName: "#buy200000",
        src: "cookies/cookie (7).png",
        color: "pink"
    },
    {
        cost: 2000000,
        used: 0,
        addup: 8,
        IDName: "#buy2000000",
        src: "cookies/cookie (8).png",
        color: "violet"
    },
    {
        cost: 20000000,
        used: 0,
        addup: 7,
        IDName: "#buy20000000",
        src: "cookies/cookie (9).png",
        color: "orange"
    },
    {
        cost: 200000000,
        used: 0,
        addup: 7,
        IDName: "#buy200000000",
        src: "cookies/cookie (10).png",
        color: "violet"
    },

    {
        cost: 2000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2B",
        src: "cookies/cookie (11).png",
        color: "orange"
    },
    {
        cost: 20000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20B",
        src: "cookies/cookie (12).png",
        color: "violet"
    },
    {
        cost: 200000000000,
        used: 0,
        addup: 7,
        IDName: "#buy200B",
        src: "cookies/cookie (13).png",
        color: "orange"
    },
    {
        cost: 2000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2T",
        src: "cookies/cookie (14).png",
        color: "violet"
    },
    {
        cost: 20000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20T",
        src: "cookies/cookie (15).png",
        color: "orange"
    },
    {
        cost: 200000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy200T",
        src: "cookies/cookie (16).png",
        color: "violet"
    },
    {
        cost: 2000000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2Q",
        src: "cookies/cookie (17).png",
        color: "orange"
    },
    {
        cost: 20000000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20Q",
        src: "cookies/cookie (18).png",
        color: "violet"
    },
    ];
let buyCookie = (cookieItem) => {
    //Unlock cookie images, remove question mark
    for (let cookieItem of cookieItemList) {
        if (points * 20 >= cookieItem.cost) document.querySelector(cookieItem.IDName).getElementsByTagName("img")[0].src = cookieItem.src;
    }

    if (!cookieItem.used && cookieItem.cost <= points ) {
        points -= cookieItem.cost;
        clickValue *= cookieItem.addup;
        document.querySelector("#cookiepoints").innerText = points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        cookieItem.used = 1;
        document.querySelector(cookieItem.IDName).style.opacity = ".5";
        document.querySelector("#cookieimage").src = cookieItem.src;
        document.querySelector(".flex-container2").style.backgroundColor = cookieItem.color;
        nextCookie += 1;



        //unlock bonus cookies
        if (cookieItem.IDName === "#buy200000000") {
            document.querySelector(".hiddenCookies").style.display = "flex";
        }

    }
}



let bonusCookies = () => {
    //Update session Storage
    
    sessionStorage.setItem("clickValue", `${clickValue}`);
    sessionStorage.setItem("points", `${points}`);
    
    getPoints();
}
setInterval(bonusCookies, 1000);

document.querySelector('#cookiebutton').addEventListener('click', getPoints);
document.querySelector('#buy20').addEventListener('click', () => buyCookie(cookieItemList[0]));
document.querySelector('#buy200').addEventListener('click', () => buyCookie(cookieItemList[1]));
document.querySelector('#buy2000').addEventListener('click', () => buyCookie(cookieItemList[2]));
document.querySelector('#buy20000').addEventListener('click', () => buyCookie(cookieItemList[3]));
document.querySelector('#buy200000').addEventListener('click', () => buyCookie(cookieItemList[4]));
document.querySelector('#buy2000000').addEventListener('click', () => buyCookie(cookieItemList[5]));
document.querySelector('#buy20000000').addEventListener('click', () => buyCookie(cookieItemList[6]));
document.querySelector('#buy200000000').addEventListener('click', () => buyCookie(cookieItemList[7]));
document.querySelector('#buy2B').addEventListener('click', () => buyCookie(cookieItemList[8]));
document.querySelector('#buy20B').addEventListener('click', () => buyCookie(cookieItemList[9]));
document.querySelector('#buy200B').addEventListener('click', () => buyCookie(cookieItemList[10]));
document.querySelector('#buy2T').addEventListener('click', () => buyCookie(cookieItemList[11]));
document.querySelector('#buy20T').addEventListener('click', () => buyCookie(cookieItemList[12]));
document.querySelector('#buy200T').addEventListener('click', () => buyCookie(cookieItemList[13]));
document.querySelector('#buy2Q').addEventListener('click', () => buyCookie(cookieItemList[14]));
document.querySelector('#buy20Q').addEventListener('click', () => buyCookie(cookieItemList[15]));

