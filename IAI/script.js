let button = document.querySelector(".button");
let popup = document.querySelector("#popup");
let backdrop = document.querySelector("#backdrop");
let popupCross = document.querySelector("#popup__cross");
button.addEventListener("click", () => {
    popup.classList.remove("popup--opacity");
    backdrop.classList.remove("popup--opacity");
});
backdrop.addEventListener("click", () => {
    popup.classList.add("popup--opacity");
    backdrop.classList.add("popup--opacity");
});
popupCross.addEventListener("click", () => {
    popup.classList.add("popup--opacity");
    backdrop.classList.add("popup--opacity");
})
let popupAvailIcon = document.querySelector("#popup__avail-icon img");
let popupStatus = document.querySelector("#popup__status");
let popupProduct = document.querySelector("#popup__product img");
let popupVerArrow;
let popupSize = [];
let popupPrice;
let popupVersions;
let popupVersion = [];
let popupContent = document.querySelector("#popup__content");
let maxAmount;
let data;
fetch('IAI/xbox.json').then(res => res.json()).then(res => {
    data = res;
    popupVersions = document.createElement("div");
    popupVersions.id = "popup__versions";
    popupContent.prepend(popupVersions);
    popupVerArrow = document.createElement("div");
    popupVerArrow.classList = "popup__ver-arrow"
    popupVersions.appendChild(popupVerArrow);
    let newElement = document.createElement("img");
    newElement.src = "IAI/img/arrow.png";
    popupVerArrow.appendChild(newElement);
    for (let x in data.multiversions[0].items) {
        newElement = document.createElement("div");
        newElement.classList = "popup__version";
        newElement.textContent = data.multiversions[0].items[x].values[Object.keys(data.multiversions[0].items[x].values)[0]].name;
        popupVersions.appendChild(newElement);
        popupVersion.push(newElement);
    }
    newElement = document.createElement("div");
    newElement.textContent = `${data.multiversions[0].name}:`;
    newElement.classList = "popup--margin5";
    popupContent.prepend(newElement);
    popupSizes = document.createElement("div");
    popupSizes.id = "popup__sizes";
    popupContent.prepend(popupSizes);
    for (let x in data.sizes.items) {
        newElement = document.createElement("div");
        newElement.classList = "popup__size";
        newElement.textContent = data.sizes.items[x].name;
        popupSizes.appendChild(newElement);
        popupSize.push(newElement);
    }
    popupSize[0].classList.add("popup__size-active");
    newElement = document.createElement("div");
    newElement.textContent = "Rozmiar:"
    newElement.classList = "popup--margin5";
    popupContent.prepend(newElement);
    popupPrice = document.createElement("h2");
    popupPrice.textContent = `${data.sizes.items.U.price.toString()}zł`;
    popupPrice.id = "popup__price";
    popupContent.prepend(popupPrice);
    newElement = document.createElement("h1");
    newElement.textContent = data.product.name;
    newElement.id = "popup__name";
    popupContent.prepend(newElement);
    popupAvailIcon.src = "IAI/img/checkmark.png";
    popupStatus.textContent = "Produkt dostępny";
    maxAmount = data.sizes.items.U.amount;
    popupProduct.src = "IAI/img/xboxsilver.png";
    for (let i = 0; i < popupSize.length; i++) {
        popupSize[i].addEventListener("click", () => {
            popupSize[sizeControl - 1].classList.remove("popup__size-active");
            popupSize[i].classList.add("popup__size-active");
            popupPrice.textContent = `${data.sizes.items[Object.keys(data.sizes.items)[i]].price}zł`
            popupStatus.textContent = `${data.sizes.items[Object.keys(data.sizes.items)[i]].status}`;
            if (data.sizes.items[Object.keys(data.sizes.items)[i]].status === "Produkt dostępny") {
                popupAvailIcon.src = "IAI/img/checkmark.png";
                if (window.matchMedia("(min-width: 979px)").matches) {
                    popupDelivery.classList.remove("popup--opacity");
                    popupDelivery.style.display = "";
                }
                else {
                    popupDelivery.style.display = "";
                }
                popupCount.textContent = "1";
                amount = 1;
                maxAmount = data.sizes.items[Object.keys(data.sizes.items)[i]].amount;
            }
            else {
                popupAvailIcon.src = "IAI/img/redcross.png";
                if (window.matchMedia("(min-width: 979px)").matches) {
                    popupDelivery.classList.add("popup--opacity");
                    popupDelivery.style.display = "";
                }
                else {
                    popupDelivery.style.display = "none"
                }
                popupCount.textContent = "0";
                amount = 0;
                maxAmount = "0";
            }
            sizeControl = i + 1;
        });
    }
    for (let i = 0; i < popupVersion.length; i++) {
        popupVersion[i].addEventListener("click", e => {
            if (i === (versionControl - 1)) {
                popupVerCollapse();
            }
            else {
                popupVerCollapse();
                popupVersions.prepend(popupVersion[i]);
                versionControl = i + 1;
                sliderFunc(0, 1);
            }
        });
    }
});
let popupVerCollapse = () => {
    if (!(popupVersions.classList.contains("popup__active"))) {
        popupAvailability.style.marginTop = `${33 - (popupVersion.length * 33)}px`;
        popupVerArrow.classList.add("popup__ver-arrow--active");
        popupVersions.classList.add("popup__active");
    }
    else {
        popupAvailability.style.marginTop = "";
        popupVerArrow.classList.remove("popup__ver-arrow--active");
        popupVersions.classList.remove("popup__active");
    }
}
let popupLeft = document.querySelector("#popup__left");
let popupRight = document.querySelector("#popup__right");
let popupAvailability = document.querySelector("#popup__availability");
let popupDelivery = document.querySelector("#popup__delivery");
let popupCount = document.querySelector("#popup__count");
let sizeControl = 1;
let productControl = 1;
let versionControl = 1;
let amount = 1;
let timeout;
let xboxColor = "silver";
popupProduct.onload = () => {
    popupProduct.style.opacity = "";
}
let sliderFunc = (direction, versionChange) => {
    if (versionChange === 0) {
        switch(productControl) {
            case 1:
                popupProduct.style.opacity = "0";
                timeout = setTimeout(() => {
                    if (direction === 1) {
                        popupProduct.src = `IAI/img/xbox${xboxColor}3.png`;
                        productControl = 3;
                    }
                    else {
                        popupProduct.src = `IAI/img/xbox${xboxColor}2.png`;
                        productControl = 2;
                    }
                }, 500);
                break;
            case 2:
                popupProduct.style.opacity = "0";
                timeout = (setTimeout(() => {
                    if (direction === 1) {
                        popupProduct.src = `IAI/img/xbox${xboxColor}.png`;
                        productControl = 1;
                    }
                    else {
                        popupProduct.src = `IAI/img/xbox${xboxColor}3.png`;
                        productControl = 3;
                    }
                }, 500));
                break;
            case 3:
                popupProduct.style.opacity = "0";
                timeout = setTimeout(() => {
                    if (direction === 1) {
                        popupProduct.src = `IAI/img/xbox${xboxColor}2.png`;
                        productControl = 2;
                    }
                    else {
                        popupProduct.src = `IAI/img/xbox${xboxColor}.png`;
                        productControl = 1;
                    }
                }, 500);
                break;
        }
    }
    else {
        productControl = 1;
        popupProduct.style.opacity = "0";
        switch (versionControl) {
            case 1:
                xboxColor = "silver";
                timeout = setTimeout(() => {
                    popupProduct.src = "IAI/img/xboxsilver.png";
                }, 500);
                break;
            case 2:
                xboxColor = "black";
                timeout = setTimeout(() => {
                    popupProduct.src = "IAI/img/xboxblack.png";
                }, 500);
                break;
            case 3:
                xboxColor = "";
                timeout = setTimeout(() => {
                    popupProduct.src = "IAI/img/xbox.png";
                }, 500);
                break;
        }
    }
}
popupLeft.addEventListener("click", () => {
    clearTimeout(timeout);
    sliderFunc(1, 0);
});
popupRight.addEventListener("click", () => {
    clearTimeout(timeout);
    sliderFunc(2, 0);
});
let popupSubtract = document.querySelector("#popup__subtract");
let popupAdd = document.querySelector("#popup__add");
popupSubtract.addEventListener("click", () => {
    if (popupCount.textContent != 0) {
        amount -= 1;
        popupCount.textContent = amount;
    }
});
popupAdd.addEventListener("click", () => {
    if (popupCount.textContent != maxAmount) {
        amount += 1;
        popupCount.textContent = amount;
    }
})
