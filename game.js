// JavaScript source code

let points = 0;
let clickValue = 1;
let nextCookie = 0;
let currentCookie = -1;
let channel = 0;
let ownedCookies = 0;
let clickAmount = 0;
let recentClicks = 0;
let resetClickValue = 1;
let ascend = 0;

let achievements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



//Load points an clickValue information
if (localStorage.getItem("points") != null) {
    points = parseInt(localStorage.getItem('points'));
}
if (localStorage.getItem("clickValue") != null) {
    clickValue = parseFloat(localStorage.getItem('clickValue'));
}

//Load achievement information
if (localStorage.getItem("achievements") != null) {
    achievements = JSON.parse (localStorage.getItem('achievements'));
    for (let i=0;i<achievements.length;i++) {
        if (achievements[i]) document.querySelector(`#achievement${i+1}`).src = "images/star.png";
	}
}

//Load extra information
if (localStorage.getItem("nextCookie") != null)  nextCookie= parseInt(localStorage.getItem('nextCookie'));
if (localStorage.getItem("currentCookie") != null)  currentCookie = parseInt(localStorage.getItem('currentCookie'));
if (localStorage.getItem("ownedCookies") != null)  ownedCookies = parseInt(localStorage.getItem('ownedCookies'));
if (localStorage.getItem("clickAmount") != null)  clickAmount = parseInt(localStorage.getItem('clickAmount'));
if (localStorage.getItem("resetClickValue") != null)  resetClickValue = parseFloat(localStorage.getItem('resetClickValue'));
if (localStorage.getItem("ascend") != null) {
    ascend = parseInt(localStorage.getItem('ascend'));

}




// POINTS GAME


//unlock 1st achievement for playing
document.querySelector("#achievement1").src = "images/star.png";

//unlock 5th achievement for playing for a day
setTimeout(function ach5 () {
    document.querySelector("#achievement5").src = "images/star.png";
    clickValue *= 1.2;
    resetClickValue *=1.2;
    document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #5!";
    achievements[4] = 1;
    setTimeout(() => document.querySelector("#awardnotice").innerText = "Some experts say green jellies from cookie land are healthier than green beans.", 10000);
}, 1000 * 60 * 60 * 24);

  








let rainbow = () => {
    let r = ''
    for (let i = 0; i < 7; i++) {

    }
}
let getPoints = () => {

    points += parseInt(clickValue);



    //round to 2 decimal places
    clickValue = +(Math.round(clickValue + "e+2")  + "e-2");

    resetClickValue = +(Math.round(resetClickValue + "e+2")  + "e-2");


    //save points every second
    save();






    

    //unlock 2nd achievement for clicking 1,000 times
    if (clickAmount >= 1000 && achievements[1] === 0) {
        document.querySelector("#achievement2").src = "images/star.png";
        clickValue *= 1.1;
        resetClickValue *= 1.1;
        document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #2!";
        setTimeout(() => document.querySelector("#awardnotice").innerText = "Don't eat cookies, they have feelings too!", 10000);
        achievements[1] = 1;
    
    }

    //unlock 6th achievement for clicking 10,000 times
    if (clickAmount >= 10000 && achievements[5] === 0) {
        document.querySelector("#achievement6").src = "images/star.png";
        clickValue *= 1.3;
        resetClickValue *= 1.3;
        document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #6!";
        setTimeout(() => document.querySelector("#awardnotice").innerText = "Nothing is sweeter than cookies, except jellies!", 10000);
        achievements[5] = 1;
    }

    //unlock 7th achievement for earning 1 Trillion jellies
    if (points >= 1000000000000 && achievements[6] === 0) {
        document.querySelector("#achievement7").src = "images/star.png";
        clickValue *= 1.1;
        resetClickValue *= 1.1;
        document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #7!";
        setTimeout(() => document.querySelector("#awardnotice").innerText = "Keep on clicking! You're doing a great job! =)", 10000);
        achievements[6] = 1;
    }
    //unlock 8th achievement for owning 18 cookies and all the channels
    if (ownedCookies === 18 && itemList[5].used && achievements[7] === 0 ) {
        document.querySelector("#achievement8").src = "images/star.png";
        clickValue *= 1.5;
        resetClickValue *= 1.5;
        document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #8!";
        setTimeout(() => document.querySelector("#awardnotice").innerText = "Being a cookie is great! Too bad you'll never know...", 10000);
        achievements[7] = 1;
    }


    //convert click value to string
    let clickValueStr = Math.floor(clickValue).toString();

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
        addup: 5,
        IDName: "#buy20",
        src: "cookies/cookie (5).png",
        pet: "cookies/pet (5).png",
        color: "pink",
        gif: ["images/birthday1.gif", "images/birthday2.gif", "images/birthday3.gif"]
    },
    {
        cost: 200,
        used: 0,
        addup: 6,
        IDName: "#buy200",
        src: "cookies/cookie (3).png",
        pet: "cookies/pet (3).png",
        color: "sandybrown",
        gif: ["images/newspaper1.gif", "images/newspaper2.gif", "images/newspaper3.gif","images/newspaper4.gif"]
    },
    {
        cost: 2000,
        used: 0,
        addup: 5,
        IDName: "#buy2000",
        src: "cookies/cookie (4).png",
        pet: "cookies/pet (4).png",
        color: "#f08080",
        gif: ["images/snow1.gif", "images/snow2.gif", "images/snow3.gif","images/snow4.gif"]
    },
    {
        cost: 20000,
        used: 0,
        addup: 5,
        IDName: "#buy20000",
        src: "cookies/cookie (6).png",
        pet: "cookies/pet (6).png",
        color: "yellowgreen",
        gif: ["images/guydance1.gif", "images/guydance2.gif", "images/guydance3.gif","images/guydance4.gif"]
    },
    {
        cost: 200000,
        used: 0,
        addup: 6,
        IDName: "#buy200000",
        src: "cookies/cookie (7).png",
        pet: "cookies/pet (7).png",
        color: "pink",
        gif: ["images/girldance1.gif", "images/girldance2.gif", "images/girldance3.gif","images/girldance4.gif"]
    },
    {
        cost: 2000000,
        used: 0,
        addup: 6,
        IDName: "#buy2000000",
        src: "cookies/cookie (8).png",
        pet: "cookies/pet (8).png",
        color: "#ffd700",
        gif: ["images/disco1.gif", "images/disco2.gif", "images/disco3.gif","images/disco4.gif"]
    },
    {
        cost: 20000000,
        used: 0,
        addup: 5,
        IDName: "#buy20000000",
        src: "cookies/cookie (9).png",
        pet: "cookies/pet (9).png",
        color: "orange",
        gif: ["images/firework1.gif", "images/firework2.gif", "images/firework3.gif","images/firework4.gif"]
    },
    {
        cost: 200000000,
        used: 0,
        addup: 5,
        IDName: "#buy200000000",
        src: "cookies/cookie (10).png",
        pet: "cookies/pet (10).png",
        color: "violet",
        gif: ["images/cat1.gif", "images/cat2.gif", "images/cat3.gif","images/cat4.gif"]
    },

    {
        cost: 2000000000,
        used: 0,
        addup: 7,
        IDName: "#buy2B",
        src: "cookies/cookie (11).png",
        pet: "cookies/pet (11).png",
        color: "orange",
        gif: ["images/spider1.gif", "images/spider2.gif", "images/spider3.gif","images/spider4.gif"]
    },
    {
        cost: 20000000000,
        used: 0,
        addup: 7,
        IDName: "#buy20B",
        src: "cookies/cookie (2).png",
        pet: "cookies/pet (2).png",
        color: "#68b9ff", // water
        gif: ["images/squid1.gif", "images/squid2.gif", "images/squid3.gif","images/squid4.gif"]
    },
    {
        cost: 200000000000,
        used: 0,
        addup: 6,
        IDName: "#buy200B",
        src: "cookies/cookie (13).png",
        pet: "cookies/pet (13).png",
        color: "#D65252",
        gif: ["images/witch1.gif", "images/witch2.gif", "images/witch3.gif","images/witch4.gif"]
    },
    {
        cost: 2000000000000,
        used: 0,
        addup: 6,
        IDName: "#buy2T",
        src: "cookies/cookie (14).png",
        pet: "cookies/pet (14).png",
        color: "#F2C5C5",
        gif: ["images/milk1.gif", "images/milk2.gif", "images/milk3.gif","images/milk4.gif"]
    },
    {
        cost: 20000000000000,
        used: 0,
        addup: 6,
        IDName: "#buy20T",
        src: "cookies/cookie (15).png",
        pet: "cookies/pet (15).png",
        color: "#A57BE3",
        gif: ["images/moon1.gif", "images/moon2.gif", "images/moon3.gif","images/moon4.gif"]
    },
    {
        cost: 200000000000000,
        used: 0,
        addup: 3,
        IDName: "#buy200T",
        src: "cookies/cookie (16).png",
        pet: "cookies/pet (16).png",
        color: "darkslateblue",
        gif: ["images/trippy1.gif", "images/trippy2.gif", "images/trippy3.gif","images/trippy4.gif"]
    },
    {
        cost: 2000000000000000,
        used: 0,
        addup: 3,
        IDName: "#buy2Q",
        src: "cookies/cookie (17).png",
        pet: "cookies/pet (17).png",
        color: "#FF69B4",
        gif: ["images/love1.gif", "images/love2.gif", "images/love3.gif","images/love4.gif"]
    },
    {
        cost: 20000000000000000,
        used: 0,
        addup: 3,
        IDName: "#buy20Q",
        src: "cookies/cookie (18).png",
        pet: "cookies/pet (18).png",
        color: "skyblue",
        gif: ["images/doublejellies.png", "images/jellies.gif", "images/shame.gif"]
    },
        {
        cost: 200000000000000000,
        used: 0,
        addup: 3,
        IDName: "#buy200Q",
        src: "cookies/cookie (19).png",
        pet: "cookies/pet (19).png",
        color: "#eba311", 
        gif: ["images/hell1.gif", "images/hell2.gif", "images/hell3.gif","images/hell4.gif"]
        },
        {
        cost: 2000000000000000000,
        used: 0,
        addup: 6,
        IDName: "#buy2QI",
        src: "cookies/cookie (20).png",
        pet: "cookies/pet (20).png",
        color: "#C70039",
        gif: ["images/dragon1.gif", "images/dragon2.gif","images/dragon3.gif", "images/win.png"]
    },
    {
        cost: 2000000000000000000,
        used: 0,
        addup: 6,
        IDName: "#buy200Q",
        src: "cookies/cookie (19).png",
        pet: "cookies/pet (19).png",
        color: "#C70039",
        gif: ["images/trippy1.gif", "images/trippy2.gif", "images/dragon2.gif","images/win.png"]
    }
    ];


itemList = [
    {
        cost: 100,
        used: 0,
        IDName: "#buyitem1",
        src: "images/cat.png"
    },
    {
        cost: 500,
        used: 0,
        IDName: "#buyitem2",
        src: "images/spider.png"
    },
    {
        cost: 1000,
        used: 0,
        IDName: "#buyitem3",
        src: "images/squid.png"
    },
    {
        cost: 2000,
        used: 0,
        IDName: "#buyitem4",
        src: "images/magic.png"
    },
    {
        cost: 5000,
        used: 0,
        IDName: "#buyitem5",
        src: "images/milk.png"
    },
    {
        cost: 10000,
        used: 0,
        IDName: "#buyitem6",
        src: "images/tvguide.png"
    },
    {
        cost: 15000,
        used: 0,
        IDName: "#buyitem7",
        src: "images/galaxy.png"
    },
    {
        cost: 20000,
        used: 0,
        IDName: "#buyitem8",
        src: "images/devil.png"
    },
    {
        cost: 30000,
        used: 0,
        IDName: "#buyitem9",
        src: "images/love.png"
    },
    {
        cost: 40000,
        used: 0,
        IDName: "#buyitem10",
        src: "images/money.png"
    },
    {
        cost: 50000,
        used: 0,
        IDName: "#buyitem11",
        src: "images/fire.png"
    },
    {
        cost: 100000,
        used: 0,
        IDName: "#buyitem12",
        src: "images/gamble.png"
    },
    ];


    //Load obtained cookies information and update the interface
if (localStorage.getItem("cookieItemList") != null) {
    cookieItemList = JSON.parse (localStorage.getItem('cookieItemList'));
    for (let i=0; i<cookieItemList.length -1; i++) {
        if (cookieItemList[i].used) {
            //update the cookie image and the one directly after.
            document.querySelector(`${cookieItemList[i].IDName}`).getElementsByTagName("img")[0].src = cookieItemList[i].src;
           document.querySelector(`${cookieItemList[i+1].IDName}`).getElementsByTagName("img")[0].src = cookieItemList[i+1].src;
            //update the image opacity
            document.querySelector(`${cookieItemList[i].IDName}`).style.opacity = ".6";
            //ensure the hidden bar is revealed after hello kitty is purchased
            if (cookieItemList[i].IDName === "#buy200000000") {
                document.querySelector(".hiddenCookies").style.display = "flex";
            }
         }
	}
    //update cookie and pet images
    cookieItemList[13].src = "cookies/cookie (16).png";
    cookieItemList[16].src = "cookies/cookie (19).png";
    cookieItemList[13].pet = "cookies/pet (16).png";
    cookieItemList[16].pet = "cookies/pet (19).png";
}
    //Load obtained item information and update the interface
if (localStorage.getItem("itemList") != null) {
    itemList = JSON.parse (localStorage.getItem('itemList'));
    for (let i=0; i<itemList.length; i++) {
        if (itemList[i].used) {
            //update the item image
            document.querySelector(`${itemList[i].IDName}`).getElementsByTagName("img")[0].src = itemList[i].src;
            //ensure the hidden bar is revealed after hello kitty is purchased
         }
	}
}


let buyCookie = (cookieItem) => {
    //Unlock cookie images, remove question mark
    

    if (!cookieItem.used && cookieItem.cost <= points ) {
        //show next cookie
                
        document.querySelector(cookieItemList[nextCookie+1].IDName).getElementsByTagName("img")[0].src = cookieItemList[nextCookie+1].src;
        points -= cookieItem.cost;
        clickValue *= cookieItem.addup;
        document.querySelector("#cookiepoints").innerText = points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        cookieItem.used = 1;
        document.querySelector(cookieItem.IDName).style.opacity = ".5";
        nextCookie +=1;
        ownedCookies += 1;

        //unlock 3rd achievement for owning 7 cookies

        if (ownedCookies === 7 && achievements[2] === 0) {
            document.querySelector("#achievement3").src = "images/star.png";
            clickValue *= 1.2;
            resetClickValue *= 1.2;
            document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #3!";
            setTimeout(() => document.querySelector("#awardnotice").innerText = "No one knows how many jellies exist in the world, except the Lord of All Cookies!", 10000);
            achievements[2] = 1;
        }
        //unlock 4th achievement for owning 8 cookies
        if (ownedCookies === 8 && achievements[3] === 0) {
            document.querySelector("#achievement4").src = "images/star.png";
            clickValue *= 1.5;
            resetClickValue *= 1.5;
            document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #4!";
            setTimeout(() => document.querySelector("#awardnotice").innerText = "Congratulations! You finished the tutorial.", 10000);
            achievements[3] = 1;
        }





        //unlock bonus cookies
        if (cookieItem.IDName === "#buy200000000") {
            document.querySelector(".hiddenCookies").style.display = "flex";
        }
       



    }

    // change text to explain demon cookie's ascension
    let ascensionText=     +(Math.round((1+.5/(ascend+1) + "e+2"))  + "e-2");
    if (cookieItem.IDName === "#buy200T") document.querySelector("#awardnotice").innerText = `Demon Cookie's Pet will let you ascend and start over with a ${ascensionText}x bonus...`;
    
       // change text to explain Truffle Cookie's Spider Shop
    if (cookieItem.IDName === "#buy2B") document.querySelector("#awardnotice").innerText = `Click my pet to view my magical shop!`;
    
    // change cookies if owned
    if (cookieItem.used) {
        channel = 0;
        document.querySelector("#cookieimage").src = cookieItem.src;
        document.querySelector("#petimage").src = cookieItem.pet;

        document.querySelector(".flex-container2").style.backgroundColor = cookieItem.color;
        document.querySelector(".flex-container2").style.backgroundImage = "none";
        document.querySelector(".flex-container2").style.backgroundImage = cookieItem.background;

        document.querySelector("#tv").src = cookieItem.gif[0];
        document.querySelector("#channeltext").innerHTML = "";

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
            // gamble for jellies
            if (currentCookie === 15) {
                //increase chances of winning if treasure was purchased
                if (Math.random() >= (.5 + .1*itemList[11].used)) {
                    //WIN! Double jellies.
                    points *= 2;
                    channel = 1;

       

                } else {
                    //Lose! Lose all jellies.
                    points = 0;
                    channel = 2;
                }

                //make TV unclickable for 10 minutes
                document.querySelector("#tv").classList.add("unclickable");

                // count down on screen for 10 minutes
                let timeleft = 1 * 60 * 10;
                const interval = setInterval(() => {
                    if (timeleft > 0) {
                        timeleft -= 1;
                        document.querySelector("#channeltext").innerHTML = `TV privileges disabled for ${Math.floor(timeleft / 60) + 1} minute(s).`;
                    } else {
                        document.querySelector("#channeltext").innerHTML = "Don't lose your beans...";
                        clearInterval(interval);
                        
                    }
                    
                }, 1000);

                // enable tv again 
                setTimeout(() => {
                    document.querySelector("#tv").classList.remove("unclickable");
                    channel = 0;
                    document.querySelector("#tv").src = cookieItemList[currentCookie].gif[channel];
                    

                }, 1000 * 60 * 10);

                
                
            } else {
                channel = 1;
            }

        } else if (channel === 1) {
            channel = 2;
            
            //unlock 9th achievement for reaching the jumpscare
            if (currentCookie === 7 && achievements[8] === 0) {
                document.querySelector("#achievement9").src = "images/star.png";
                clickValue *= 1.1;
                resetClickValue *= 1.1;
                document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #9!";
                setTimeout(() => document.querySelector("#awardnotice").innerText = "Do you need a cookie hug?", 10000);
                achievements[8] = 1;
            }
        } else if (channel === 2) {
            //check if the final channel is unlocked
            if (itemList[5].used) {
                channel = 3;
            } else {
                channel = 4;     
			}
        } else if (channel === 3) {
            channel = 4;
        } else  {
            channel = 0;
        }
        //change the channel depending on the currently selected cookie
        if (channel === 4) {
            document.querySelector("#tv").src = "images/black.gif";
        } else {
            document.querySelector("#tv").src = cookieItemList[currentCookie].gif[channel];
        }
    }, 100);
}

let save = () => {
    localStorage.setItem('points', points);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('ascend', ascend);
    localStorage.setItem('resetClickValue', JSON.stringify(resetClickValue));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('cookieItemList', JSON.stringify(cookieItemList));
    localStorage.setItem('itemList', JSON.stringify(itemList));
    localStorage.setItem('nextCookie', nextCookie);
    localStorage.setItem('currentCookie', currentCookie);
    localStorage.setItem('ownedCookies', ownedCookies);
    localStorage.setItem('clickAmount', clickAmount);
}

let bonusCookies = () => {
    //Update stats

    document.querySelector("#stats").innerHTML=`
    <div>Cookies: ${ownedCookies}</div><div>Total Clicks: ${clickAmount}</div><div>Channels: ${ownedCookies*3 +(ownedCookies*itemList[5].used)}</div><div>Ascensions: ${ascend}</div>
    <br/><div>Bonus: ${resetClickValue}x</div>

    `;
    
    
    getPoints();
}
setInterval(bonusCookies, 1000);


//unlock 10th achievement for cheating
//check every 20m to see if the user clicked 30,000 times.
let cheatTimer = () => {
    recentClicks = clickAmount;
    setTimeout(() => {
        recentClicks = clickAmount - recentClicks 

        if (achievements[9] === 0 && recentClicks >= 30000) {
            for (let i = 1; i < 11; i++) {
                document.querySelector(`#achievement${i}`).src = "images/skull.png";
            }
            document.querySelector("#achievement10").src = "images/star.png";
            clickValue *= .01;
            resetClickValue *= .01;
            document.querySelector("#awardnotice").innerText = "Congratulations on earning achievement #10!";
            achievements[9] = 1;
            achievements = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            document.querySelector("#tv").src = "images/glitch.gif";
            setTimeout(() => document.querySelector("#awardnotice").innerText = "You cheated. No more achievements for you. Enjoy the penalty.", 10000);
        }
    }
    , 1000 * 60 * 20)// finish after 20 min
}
setInterval(cheatTimer, 1000 * 60 * 20); // every 20 min


       

document.querySelector('#cookiebutton').addEventListener('click', () => {
    getPoints();
    clickAmount += 1;
});
document.querySelector('#petbutton').addEventListener('click', () => {
    // Ascend if demon cookie's pet
    if (currentCookie === 13) {
    //reset and ascend
    ascend+=1;
    points = 0;
    nextCookie = 0;
    currentCookie = 0;
    ownedCookies = 0;
    currentCookie = -1;
    resetClickValue *= (1+(.5/(ascend+1)));

    clickValue = resetClickValue;

    for (let i of cookieItemList) i.used=0;
    save();
    console.log(resetClickValue);
    //refresh the page

    location.reload();
    }

    // Open the shop if Truffle Cookie's pet
    if (currentCookie === 8) {
        document.querySelector('#shop').style.display = "flex";
        // change text to explain Truffle Cookie's Treasure Shop
       document.querySelector("#awardnotice").innerText = `If you have enough clicks you can buy my treasures!`;
    }

});

let buyItem = (itemNumber) => {
    //Unlock item, change picture
    

    if (itemNumber.cost <= clickAmount ) {
        
        //change background
        if (itemNumber.IDName === "#buyitem1") cookieItemList[7].background = "url(images/cat.gif)";
         if (itemNumber.IDName === "#buyitem2") cookieItemList[8].background = "url(images/spider.gif)";
        if (itemNumber.IDName === "#buyitem3") cookieItemList[9].background = "url(images/squid.gif)";
        if (itemNumber.IDName === "#buyitem4") cookieItemList[10].background = "url(images/magic.gif)";
        if (itemNumber.IDName === "#buyitem5") cookieItemList[11].background = "url(images/milk.gif)";
        if (itemNumber.IDName === "#buyitem7") cookieItemList[12].background = "url(images/galaxy.gif)";
        if (itemNumber.IDName === "#buyitem8") cookieItemList[13].background = "url(images/devil.gif)";
        if (itemNumber.IDName === "#buyitem9") cookieItemList[14].background = "url(images/love.gif)";
        if (itemNumber.IDName === "#buyitem10") cookieItemList[15].background = "url(images/money.gif)";
        if (itemNumber.IDName === "#buyitem11") {
            cookieItemList[16].background = "url(images/fire.gif)";
            cookieItemList[17].background = "url(https://cdn.dribbble.com/users/740666/screenshots/1899051/media/5a1d9087f72588ca3a798f412274d0f8.gif)";
        }

        if (itemNumber.IDName === "#buyitem6") {
            //update TV channels
            cookieItemList[0].gif = ["images/birthday1.gif", "images/birthday2.gif", "images/birthday3.gif","images/birthday4.gif"];
            cookieItemList[1].gif = ["images/newspaper1.gif", "images/newspaper2.gif", "images/newspaper3.gif","images/newspaper4.gif"];
            cookieItemList[2].gif = ["images/snow1.gif", "images/snow2.gif", "images/snow3.gif","images/snow4.gif"];
            cookieItemList[3].gif = ["images/guydance1.gif", "images/guydance2.gif", "images/guydance3.gif","images/guydance4.gif"];
            cookieItemList[4].gif = ["images/girldance1.gif", "images/girldance2.gif", "images/girldance3.gif","images/girldance4.gif"];
            cookieItemList[5].gif = ["images/disco1.gif", "images/disco2.gif", "images/disco3.gif","images/disco4.gif"];
            cookieItemList[6].gif = ["images/firework1.gif", "images/firework2.gif", "images/firework3.gif","images/firework4.gif"];
            cookieItemList[7].gif = ["images/cat1.gif", "images/cat2.gif", "images/cat3.gif","images/cat4.gif"];
            cookieItemList[8].gif = ["images/spider1.gif", "images/spider2.gif", "images/spider3.gif","images/spider4.gif"];
            cookieItemList[9].gif = ["images/squid1.gif", "images/squid2.gif", "images/squid3.gif","images/squid4.gif"];
            cookieItemList[10].gif = ["images/witch1.gif", "images/witch2.gif", "images/witch3.gif","images/witch4.gif"];
            cookieItemList[11].gif = ["images/milk1.gif", "images/milk2.gif", "images/milk3.gif","images/milk4.gif"];
            cookieItemList[12].gif = ["images/moon1.gif", "images/moon2.gif", "images/moon3.gif","images/moon4.gif"];
            cookieItemList[13].gif = ["images/trippy1.gif", "images/trippy2.gif", "images/trippy3.gif","images/trippy4.gif"];
            cookieItemList[14].gif = ["images/love1.gif", "images/love2.gif", "images/love3.gif","images/love4.gif"];
            cookieItemList[15].gif = ["images/doublejellies.png", "images/jellies.gif", "images/shame.gif"];
            cookieItemList[16].gif = ["images/hell1.gif", "images/hell2.gif", "images/hell3.gif","images/hell4.gif"];
            cookieItemList[17].gif = ["images/dragon1.gif", "images/dragon2.gif","images/dragon3.gif", "images/win.png"];
        }
        // Gain a permanent bonus
        if (itemNumber.used ===0) {
              clickValue *= 1.05;
              resetClickValue *= 1.05;  
              itemNumber.used = 1;
		}
        

        document.querySelector(itemNumber.IDName).getElementsByTagName("img")[0].src = itemNumber.src;



    } else {
        document.querySelector("#awardnotice").innerText = `You are not worthy. You need ${itemNumber.cost-clickAmount} more clicks to buy this!`;
	}
}

document.querySelector('#reset').addEventListener('click', () => {
    localStorage.clear(); // for debugging
    location.reload();
});

document.querySelector('#exitshop').addEventListener('click', () => document.querySelector('#shop').style.display = "none");
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
document.querySelector('#buy200Q').addEventListener('click', () => buyCookie(cookieItemList[16]));
document.querySelector('#buy2QI').addEventListener('click', () => buyCookie(cookieItemList[17]));
for (let i=1; i<=12; i++) document.querySelector(`#buyitem${i}`).addEventListener('click', () => buyItem(itemList[`${i-1}`]));

