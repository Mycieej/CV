let buttonCv = document.querySelectorAll(".button--cv");
let cv = document.querySelector("#cv");
let buttonPortfolio = document.querySelectorAll(".button--portfolio");
let portfolio = document.querySelector("#portfolio");
let cvSwiper = () => {
    if (cv.style.transform === "") {
        cv.style.transform = "translateY(-379px)";
    }

    else {
        cv.style.transform = "";
    }
}
let portfolioSwiper = () => {
    if (portfolio.style.transform === "") {
        portfolio.style.transform = "translateY(-379px)";
    }

    else {
        portfolio.style.transform = "";
    }
}
for (let i = 0; i < buttonCv.length; i++) {
    buttonCv[i].addEventListener("click", cvSwiper);
}
for (let i = 0; i < buttonPortfolio.length; i++) {
    buttonPortfolio[i].addEventListener("click", portfolioSwiper);
}
let welcome = document.querySelector("#welcome");
let welcomeText = document.querySelectorAll("#welcome p");
let welcomeButton = document.querySelector("#welcome-button");
let welcomeLinkLogo = document.querySelectorAll(".welcome__link-logo");
let welcomeLinkText = document.querySelectorAll(".welcome__link-text");
let banner = document.querySelector("#banner");
let bannerText = document.querySelectorAll("#banner h1, #banner h2");
let welcomeBackground = document.querySelector("#welcome__background");
for (let i = 0; i < welcomeLinkLogo.length; i++) {
    welcomeLinkLogo[i].style.transform = `translateX(${welcomeLinkText[i].offsetWidth / 2}px)`
}
let bannerControl = 0;
let welcomeMouseOver = () => {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    welcome.style.backgroundColor = "transparent";
    for (let i = 0; i < welcomeText.length; i++) {
        welcomeText[i].style.opacity = "0";
    }
    banner.style.opacity = "0";
    if (welcomeLinkLogo[0].style.opacity != "1") {
        setTimeout(() => {
            for (let i = 0; i < welcomeLinkLogo.length; i++) {
                welcomeLinkLogo[i].style.opacity = "1";
            }
            banner.style.height = "0";
            welcome.style.height = "464px";
            for (let i = 0; i < bannerText.length; i++) {
                bannerText[i].style.pointerEvents = "none";
            }
            setTimeout(() => {
                for (let i = 0; i < welcomeLinkLogo.length; i++) {
                    welcomeLinkLogo[i].style.transform = `translateX(${-100 + (welcomeLinkText[i].offsetWidth / 2)}px)`;
                }
                setTimeout(() => {
                    for (let i = 0; i < welcomeLinkText.length; i++) {
                        welcomeLinkText[i].style.opacity = "1";
                    }
                    welcomeBackground.style.zIndex = "0";
                }, 300);
            }, 600);
        }, 600);
    }
    else if (welcomeLinkLogo[0].style.transform != `translateX(${-100 + (welcomeLinkText[0].offsetWidth / 2)}px)`) {
        for (let i = 0; i < welcomeLinkLogo.length; i++) {
            welcomeLinkLogo[i].style.transform = `translateX(${-100 + (welcomeLinkText[i].offsetWidth / 2)}px)`
        }
        setTimeout(() => {
            for (let i = 0; i < welcomeLinkText.length; i++) {
                welcomeLinkText[i].style.opacity = "1";
            }
            welcomeBackground.style.zIndex = "0";
        }, 300);
    }
    else if (welcomeLinkText[0].style.opacity != "1") {
        console.log("C");
        for (let i = 0; i < welcomeLinkText.length; i++) {
            welcomeLinkText[i].style.opacity = "1";
        }
        welcomeBackground.style.zIndex = "0";
    }
}
let welcomeMouseOut = () => {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    for (let i = 0; i < welcomeLinkText.length; i++) {
        welcomeLinkText[i].style.opacity = "";
    }
    welcomeBackground.style.zIndex = "";
    if (welcomeLinkLogo[0].style.transform != `translateX(${welcomeLinkText[0].offsetWidth / 2}px)`) {
        setTimeout(() => {
            for (let i = 0; i < welcomeLinkLogo.length; i++) {
                welcomeLinkLogo[i].style.transform = `translateX(${welcomeLinkText[i].offsetWidth / 2}px)`;
            }
            setTimeout(() => {
                for (let i = 0; i < welcomeLinkLogo.length; i++) {
                    welcomeLinkLogo[i].style.opacity = "";
                }
                banner.style.height = "";
                welcome.style.height = "";
                for (let i = 0; i < bannerText.length; i++) {
                    bannerText[i].style.pointerEvents = "";
                }
                setTimeout(() => {
                    welcome.style.backgroundColor = "";
                    for (let i = 0; i < welcomeText.length; i++) {
                        welcomeText[i].style.opacity = "";
                    }
                    banner.style.opacity = "";
                }, 600);
            }, 600);
        }, 300);
    }
    else if (welcomeLinkLogo[0].style.opacity != "") {
        for (let i = 0; i < welcomeLinkLogo.length; i++) {
            welcomeLinkLogo[i].style.opacity = "";
        }
        banner.style.height = "";
        welcome.style.height = "";
        for (let i = 0; i < bannerText.length; i++) {
            bannerText[i].style.pointerEvents = "";
        }
        setTimeout(() => {
            welcome.style.backgroundColor = "";
            for (let i = 0; i < welcomeText.length; i++) {
                welcomeText[i].style.opacity = "";
            }
            banner.style.opacity = "";
        }, 600);
    }
    else if (welcome.style.backgroundColor != "") {
        welcome.style.backgroundColor = "";
        for (let i = 0; i < welcomeText.length; i++) {
            welcomeText[i].style.opacity = "";
            welcomeText[i].style.pointerEvents = "";
        }
        banner.style.opacity = "";
    }
}
welcome.addEventListener("mouseover", welcomeMouseOver);
welcome.addEventListener("mouseleave", welcomeMouseOut);