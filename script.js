// ==========================================
// Loader Hide
// ==========================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }

});

// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ==========================================
// Sticky Navbar
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================================
// Active Navigation Link
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(

".card, .menu-card, .seller-card, .gallery-item, .review-card, .contact-box, .counter-box, .about-image, .about-content"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================================
// Counter Animation
// ==========================================

const counters = document.querySelectorAll(".counter-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+","");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 80);

        if(count < target){

            counter.setAttribute("data-count", count + increment);

            counter.innerText = (count + increment > target ? target : count + increment) + "+";

            setTimeout(updateCounter,20);

        }

    }

    updateCounter();

});




// ==========================================
// Gallery Image Popup (Lightbox)
// ==========================================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.className = "image-popup";

        popup.innerHTML = `
            <span class="close-popup">&times;</span>
            <img src="${image.src}">
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {

            popup.remove();

        });

    });

});

// ==========================================
// Floating Buttons Animation
// ==========================================

const floatingButtons = document.querySelectorAll(".whatsapp-btn,.call-btn");

floatingButtons.forEach(btn=>{

    setInterval(()=>{

        btn.style.transform="scale(1.08)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },500);

    },2000);

});

// ==========================================
// Welcome Message
// ==========================================

setTimeout(()=>{

    console.log("Welcome to B.Tech Pani Puri Wala ❤️");

},1000);

// ==========================================
// Navbar Close On Mobile Click
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

// ==========================================
// Image Hover Effect
// ==========================================

document.querySelectorAll(".card img,.menu-card img,.gallery-item img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";
        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// ==========================================
// Current Year
// ==========================================

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

console.log("Website Loaded Successfully");





/* ===========================
   Search Menu
=========================== */

const searchBox = document.getElementById("searchBox");

const menuCards = document.querySelectorAll(".menu-card");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

let value = searchBox.value.toLowerCase();

menuCards.forEach(card=>{

let text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

/* ===========================
   Filter Buttons
=========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

menuCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.dataset.category===filter){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});




/*================ ORDER POPUP PART-1 ================*/

const popup = document.getElementById("orderPopup");
const popupItem = document.getElementById("popupItem");
const popupPrice = document.getElementById("popupPrice");
const sizeBox = document.getElementById("sizeBox");

const qtyText = document.getElementById("qty");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const closePopup = document.getElementById("closePopup");

const addToCart = document.getElementById("addToCart");

let quantity = 1;
let currentItem = "";
let currentType = "";

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const placeOrder = document.getElementById("placeOrder");
const closeCart = document.querySelector(".close-cart");

const totalPrice = document.getElementById("totalPrice");
const clearCart = document.getElementById("clearCart");

const customerName = document.getElementById("customerName");
const customerMobile = document.getElementById("customerMobile");


const customerAddress = document.getElementById("customerAddress");
const addressBox = document.getElementById("addressBox");
const deliveryType = document.getElementsByName("deliveryType");


document.querySelectorAll(".openPopup").forEach(button=>{

button.addEventListener("click",()=>{

popup.style.display="flex";

quantity=1;

qtyText.innerText=quantity;

currentItem=button.dataset.item;

currentType=button.dataset.type;

popupItem.innerText=currentItem;

if(currentItem==="Pani Puri"){

popupPrice.innerText="₹10 (4 Pieces)";

sizeBox.style.display="none";

}

else if(currentItem==="Veg Patties"){

popupPrice.innerText="₹15 (1 Piece)";

sizeBox.style.display="none";

}

else if(currentItem==="Chaat"){

popupPrice.innerText="Half ₹10 | Full ₹20";

sizeBox.style.display="block";

}

else if(currentItem==="Veg Noodles"){

popupPrice.innerText="Half ₹30 | Full ₹50";

sizeBox.style.display="block";

}

else if(currentItem==="Veg Momos"){

popupPrice.innerText="Half ₹20 | Full ₹40";

sizeBox.style.display="block";

}

else if(currentItem==="Fry Momos"){

popupPrice.innerText="Half ₹20 | Full ₹40";

sizeBox.style.display="block";

}

else if(currentItem==="Potato Finger"){

popupPrice.innerText="Half ₹20 | Full ₹40";

sizeBox.style.display="block";

}

});

});

closePopup.onclick=function(){

popup.style.display="none";

}

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

}

plusBtn.onclick=function(){

quantity++;

qtyText.innerText=quantity;

}

minusBtn.onclick=function(){

if(quantity>1){

quantity--;

qtyText.innerText=quantity;

}

}
//*================ ADD TO FOOD ORDER ================*/

addToCart.onclick = function () {

    let size = "";

    if (currentType === "size") {
        size = document.querySelector('input[name="size"]:checked').value;
    }

    // Same item already exists?
    let existingItem = cart.find(food =>
        food.item === currentItem &&
        food.size === size &&
        food.type === currentType
    );

    if (existingItem) {

        existingItem.qty += quantity;

    } else {

        cart.push({

            item: currentItem,
            size: size,
            qty: quantity,
            type: currentType

        });

    }

    cartCount.innerText = cart.length;

    popup.style.display = "none";

    updateCart();

};





/*================ UPDATE CART ================*/

function updateCart() {

    if (cart.length === 0) {

        cartItems.innerHTML =
        '<p class="empty-cart">No food items added yet.</p>';

        totalPrice.innerHTML = "₹0";

        return;

    }

    let html = "";
    let total = 0;

    cart.forEach((food, index) => {

        let price = 0;

        if(food.item === "Pani Puri"){

            price = 10;

        }

        else if(food.item === "Chaat"){

            price = (food.size === "Full") ? 20 : 10;

        }

        else if(food.item === "Veg Noodles"){

            price = (food.size === "Full") ? 50 : 30;

        }

        else if(food.item === "Veg Momos"){

            price = (food.size === "Full") ? 40 : 20;

        }

        else if(food.item === "Fry Momos"){

            price = (food.size === "Full") ? 40 : 20;

        }

        else if(food.item === "Potato Finger"){

            price = (food.size === "Full") ? 40 : 20;

        }

        else if(food.item === "Veg Patties"){

            price = 15;

        }

        let itemTotal = price * food.qty;

        total += itemTotal;

        html += `

        <div class="cart-item">

            <div class="cart-item-info">

                <h3>${food.item}</h3>

                <p>

                    ${food.type === "size" ? "🥣 Size : " + food.size + "<br>" : ""}

                </p>

                <div class="qty-control">

                    <button onclick="decreaseQty(${index})">➖</button>

                    <span>${food.qty}</span>

                    <button onclick="increaseQty(${index})">➕</button>

                </div>

                <p>

                    ${food.type === "piece" ? "Piece(s)" : "Plate(s)"}

                </p>

                <h4>💰 ₹${itemTotal}</h4>

            </div>

            <button class="remove-item" onclick="removeItem(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

   cartItems.innerHTML = html;

totalPrice.innerHTML = "₹" + total;

updateDelivery();
}

/*================ INCREASE QUANTITY ================*/

function increaseQty(index){

    cart[index].qty++;

    updateCart();

}

/*================ DECREASE QUANTITY ================*/

function decreaseQty(index){

    if(cart[index].qty > 1){

        cart[index].qty--;

    }
    else{

        cart.splice(index,1);

        cartCount.innerText = cart.length;

    }

    updateCart();

}


/*================ REMOVE ITEM ================*/

function removeItem(index){

    cart.splice(index,1);

    cartCount.innerText = cart.length;

    updateCart();

}


/*================ FOOD ORDER POPUP ================*/

cartBtn.onclick = function () {

    cartPopup.style.display = "flex";

}

closeCart.onclick = function () {

    cartPopup.style.display = "none";

}

window.addEventListener("click", function (e) {

    if (e.target == cartPopup) {

        cartPopup.style.display = "none";

    }

});

/*================ PROCEED TO WHATSAPP =================*/

placeOrder.onclick = function () {

    if (cart.length === 0) {

        alert("Please add at least one food item.");
        return;

    }

    let name = customerName.value.trim();
    let mobile = customerMobile.value.trim();
    let address = customerAddress.value.trim();

    let orderType = document.querySelector('input[name="deliveryType"]:checked').value;

    let area = "";
    let charge = 0;
    let time = "10-15 Minutes";

    if (orderType === "Delivery") {

        area = deliveryArea.value;

        if(area === "local"){

            area = "Birsinghpur Local";

        }
        else if(area === "3km"){

            area = "Outside Birsinghpur (0-3 KM)";

        }
        else{

            area = "Outside Birsinghpur (3-5 KM)";

        }

        charge = parseInt(deliveryCharge.innerText.replace("₹",""));
        time = deliveryTime.innerText;

    }

    if (name === "") {

        alert("Please enter your name.");
        customerName.focus();
        return;

    }

    if (mobile.length !== 10 || isNaN(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");
        customerMobile.focus();
        return;

    }

    if (orderType === "Delivery" && address === "") {

        alert("Please enter your delivery address.");
        customerAddress.focus();
        return;

    }

    let message = `🍽 *B.Tech Pani Puri Wala*

👤 Customer : ${name}
📞 Mobile : ${mobile}
🚚 Order Type : ${orderType}
`;

    if(orderType==="Delivery"){

        message += `📍 Delivery Area : ${area}
⏰ Delivery Time : ${time}
🚚 Delivery Charge : ₹${charge}

🏠 Address :
${address}

`;

    }

    message += "━━━━━━━━━━━━━━━━━━\n\n";
    message += "🛒 Order Details\n\n";

    let total = 0;

    cart.forEach((food,index)=>{

        let price=0;

        if(food.item==="Pani Puri") price=10;
        else if(food.item==="Chaat") price=(food.size==="Full")?20:10;
        else if(food.item==="Veg Noodles") price=(food.size==="Full")?50:30;
        else if(food.item==="Veg Momos") price=(food.size==="Full")?40:20;
        else if(food.item==="Fry Momos") price=(food.size==="Full")?40:20;
        else if(food.item==="Potato Finger") price=(food.size==="Full")?40:20;
        else if(food.item==="Veg Patties") price=15;

        let itemTotal = price * food.qty;

        total += itemTotal;

        message += `${index+1}. ${food.item}\n`;

        if(food.type==="size"){

            message += `🥣 Size : ${food.size}\n`;

        }

        message += `📦 Qty : ${food.qty}`;

        message += (food.type==="piece") ? " Piece(s)\n" : " Plate(s)\n";

        message += `💰 Amount : ₹${itemTotal}\n\n`;

    });

    let grandTotal = total + charge;

    message += "━━━━━━━━━━━━━━━━━━\n";

    message += `🍽 Food Total : ₹${total}\n`;
    message += `🚚 Delivery Charge : ₹${charge}\n`;
    message += `💵 Grand Total : ₹${grandTotal}\n\n`;

    message += "🙏 Please confirm my order.\n\n";
    message += "Thank You ❤️";

    window.open(
        "https://wa.me/918103402824?text=" + encodeURIComponent(message),
        "_blank"
    );

    /* RESET */

    cart = [];
    cartCount.innerText = "0";

    customerName.value = "";
    customerMobile.value = "";
    customerAddress.value = "";

    document.querySelector('input[value="Pickup"]').checked = true;

    addressBox.style.display = "none";
    deliveryAreaBox.style.display = "none";

    updateCart();

    cartPopup.style.display = "none";

};


/*================ CLEAR FOOD ORDER =================*/

clearCart.onclick = function () {

    cart = [];

    cartCount.innerText = 0;

    totalPrice.innerHTML = "₹0";

    updateCart();

}


/*================ DELIVERY TYPE =================*/

deliveryType.forEach((radio) => {

    radio.addEventListener("change", function () {

        if (this.value === "Delivery") {

            addressBox.style.display = "block";
            deliveryAreaBox.style.display = "block";

        } else {

            addressBox.style.display = "none";
            deliveryAreaBox.style.display = "none";

            customerAddress.value = "";

        }

        updateDelivery();

    });

});

/*================ DELIVERY CALCULATION =================*/

deliveryArea.addEventListener("change", updateDelivery);

function updateDelivery() {

    let foodTotal = parseInt(totalPrice.innerText.replace("₹","")) || 0;

    let charge = 0;
    let time = "10-15 Minutes";

    let type = document.querySelector('input[name="deliveryType"]:checked').value;

    if(type === "Delivery"){

        if(deliveryArea.value === "local"){

            charge = (foodTotal >= 50) ? 0 : 20;
            time = "20-30 Minutes";

        }

        else if(deliveryArea.value === "3km"){

            charge = 30;
            time = "30-40 Minutes";

        }

        else if(deliveryArea.value === "5km"){

            charge = 40;
            time = "40-60 Minutes";

        }

    }

    deliveryCharge.innerHTML = "₹" + charge;

    deliveryTime.innerHTML = time;

    grandTotal.innerHTML = "₹" + (foodTotal + charge);

}


/*================ SHOP OPEN/CLOSE STATUS ================*/

function updateShopStatus(){

    let now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let current = hour * 60 + minute;

    let open = 11 * 60;   //11:00 AM

    let close = 21 * 60;  //9:00 PM

    let status = document.getElementById("shopStatus");

    if(current >= open && current < close){

        status.classList.remove("closed");

        status.innerHTML =
        "🟢 Open Now | ⏰ Closes at 9:00 PM";

    }

    else{

        status.classList.add("closed");

        status.innerHTML =
        "🔴 Closed Now | ⏰ Opens at 11:00 AM";

    }

}

updateShopStatus();

setInterval(updateShopStatus,60000);


/*================ COPY UPI =================*/

function copyUPI(){

    const upi = document.getElementById("upiId").innerText;

    navigator.clipboard.writeText(upi);

    alert("✅ UPI ID Copied Successfully!");

}