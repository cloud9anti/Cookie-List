// JavaScript source code

let points = 1;
let clickValue = 1;
let nextCookie = 0;
let currentCookie = -1;
let channel = 0;
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



    //convert click value to string
    let clickValueStr = clickValue.toString();

    if (clickValue >= 1000000000000) {
        clickValueStr = `${Math.floor(clickValue / 1000000000000)} T`;
    } else if (clickValue >= 1000000000) {
        clickValueStr = `${Math.floor(clickValue / 1000000000)} B`;
    } else if (clickValue >= 1000000) {
        clickValueStr = `${Math.floor(clickValue / 1000000)} M`;
    }
    
    //display points gained
    //<span class="pointspopup"></span>
    let popUp = document.createElement('span');
    popUp.classList.add("pointspopup");
    popUp.innerHTML = `+${clickValueStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} jellies`;
    document.querySelector("#cookiebutton").appendChild(popUp);


    //make points disappear
    setTimeout(function () {
        document.querySelector("#cookiebutton").removeChild(popUp);
    }, 600);

    

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
    document.querySelector("#jps").innerText = clickValueStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector("#jellyleft").innerText = jellyLeft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

}


cookieItemList = [
    {
        cost: 20,
        used: 0,
        addup: 3,
        IDName: "#buy20",
        src: "cookies/cookie (5).png",
        color: "pink",
        gif: ["images/birthday1.gif", "images/birthday2.gif", "images/birthday3.gif"]
    },
    {
        cost: 200,
        used: 0,
        addup: 6,
        IDName: "#buy200",
        src: "cookies/cookie (3).png",
        color: "sandybrown",
        gif: ["images/newspaper1.gif", "images/newspaper2.gif", "images/newspaper3.gif"]
    },
    {
        cost: 2000,
        used: 0,
        addup: 5,
        IDName: "#buy2000",
        src: "cookies/cookie (4).png",
        color: "#f08080",
        gif: ["images/snow1.gif", "images/snow2.gif", "images/snow3.gif"]
    },
    {
        cost: 20000,
        used: 0,
        addup: 5,
        IDName: "#buy20000",
        src: "cookies/cookie (6).png",
        color: "yellowgreen",
        gif: ["images/guydance1.gif", "images/guydance2.gif", "images/guydance3.gif"]
    },
    {
        cost: 200000,
        used: 0,
        addup: 5,
        IDName: "#buy200000",
        src: "cookies/cookie (7).png",
        color: "pink",
        gif: ["images/girldance1.gif", "images/girldance2.gif", "images/girldance3.gif"]
    },
    {
        cost: 2000000,
        used: 0,
        addup: 8,
        IDName: "#buy2000000",
        src: "cookies/cookie (8).png",
        color: "#ffd700",
        gif: ["images/disco1.gif", "images/disco2.gif", "images/disco3.gif"]
    },
    {
        cost: 20000000,
        used: 0,
        addup: 7,
        IDName: "#buy20000000",
        src: "cookies/cookie (9).png",
        color: "orange",
        gif: ["images/firework1.gif", "images/firework2.gif", "images/firework3.gif"]
    },
    {
        cost: 200000000,
        used: 0,
        addup: 7,
        IDName: "#buy200000000",
        src: "cookies/cookie (10).png",
        color: "violet",
        gif: ["images/cat1.gif", "images/cat2.gif", "images/cat3.gif"]
    },

    {
        cost: 2000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2B",
        src: "cookies/cookie (11).png",
        color: "orange",
        gif: ["images/spider1.gif", "images/spider2.gif", "images/spider3.gif"]
    },
    {
        cost: 20000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20B",
        src: "cookies/cookie (2).png",
        color: "#68b9ff", // water
        gif: ["images/squid1.gif", "images/squid2.gif", "images/squid3.gif"]
    },
    {
        cost: 200000000000,
        used: 0,
        addup: 7,
        IDName: "#buy200B",
        src: "cookies/cookie (13).png",
        color: "#D65252",
        gif: ["images/witch1.gif", "images/witch2.gif", "images/witch3.gif"]
    },
    {
        cost: 2000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2T",
        src: "cookies/cookie (14).png",
        color: "#F2C5C5",
        gif: ["images/milk1.gif", "images/milk2.gif", "images/milk3.gif"]
    },
    {
        cost: 20000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20T",
        src: "cookies/cookie (15).png",
        color: "#A57BE3",
        gif: ["images/moon1.gif", "images/moon2.gif", "images/moon3.gif"]
    },
    {
        cost: 200000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy200T",
        src: "cookies/cookie (16).png",
        color: "#eba311 ",
        gif: ["images/hell1.gif", "images/hell2.gif", "images/hell3.gif"]
    },
    {
        cost: 2000000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2Q",
        src: "cookies/cookie (17).png",
        color: "#FF69B4",
        gif: ["images/love1.gif", "images/love2.gif", "images/love3.gif"]
    },
    {
        cost: 20000000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20Q",
        src: "cookies/cookie (18).png",
        color: "#C70039",
        gif: ["images/trippy1.gif", "images/trippy2.gif", "images/win.png"]
    },
    {
        cost: 20000000000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20Q",
        src: "cookies/cookie (18).png",
        color: "#C70039",
        gif: ["images/trippy1.gif", "images/trippy2.gif", "images/win.png"]
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
        nextCookie += 1;



        //unlock bonus cookies
        if (cookieItem.IDName === "#buy200000000") {
            document.querySelector(".hiddenCookies").style.display = "flex";
        }



    }
    // change cookies if owned
    if (cookieItem.used) {
        channel = 0;
        document.querySelector("#cookieimage").src = cookieItem.src;
        document.querySelector(".flex-container2").style.backgroundColor = cookieItem.color;
        document.querySelector("#tv").src = cookieItem.gif[0];

        // change the current cookie depending on the object index
        currentCookie = cookieItemList.indexOf(cookieItem);
    }
}

//let the user change the channel on click
let changeChannel = () => {

    // Static effect for .1 seconds
    document.querySelector("#tv").src = "images/static.gif";
    setTimeout(function () {
        
        if (channel === 0) {
            channel = 1;

        } else if (channel === 1) {
            channel = 2;
        } else if (channel === 2) {
        channel = 3;
        } else if (channel === 3) {
            channel = 0;
        }
        //change the channel depending on the currently selected cookie
        if (channel === 3) {
            document.querySelector("#tv").src = "images/black.gif";
        } else {
            document.querySelector("#tv").src = cookieItemList[currentCookie].gif[channel];
        }
    }, 100);
}


let bonusCookies = () => {
    //Update session Storage
    
    sessionStorage.setItem("clickValue", `${clickValue}`);
    sessionStorage.setItem("points", `${points}`);
    
    getPoints();
}
setInterval(bonusCookies, 1000);

document.querySelector('#cookiebutton').addEventListener('click', getPoints);
document.querySelector('#tv').addEventListener('click', changeChannel);
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

