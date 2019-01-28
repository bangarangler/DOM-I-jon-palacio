const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]); //jshint ignore: line

let nav = document.querySelectorAll("a");
//console.log(nav);

nav[0].textContent = siteContent.nav["nav-item-1"];

nav[1].textContent = siteContent.nav["nav-item-2"];

nav[2].textContent = siteContent.nav["nav-item-3"];

nav[3].textContent = siteContent.nav["nav-item-4"];

nav[4].textContent = siteContent.nav["nav-item-5"];

nav[5].textContent = siteContent.nav["nav-item-6"];

const greenATags = document.querySelectorAll("nav a");
//console.log(greenATags);

greenATags.forEach(e => (e.style.color = "green"));

const navArea = document.querySelector("nav");
const newA = document.createElement("a");
newA.textContent = "New Item";
newA.style.color = "green";
navArea.appendChild(newA);

const newB = document.createElement("a");
newB.textContent = "Beg New Item";
newB.style.color = "green";
navArea.prepend(newB);

const ctaText = document.querySelector("h1");
const ctaImg = document.querySelector("#cta-img");
const ctaBtn = document.querySelector(".cta button");

ctaText.textContent = siteContent.cta["h1"];
ctaImg.src = siteContent.cta["img-src"];
ctaBtn.textContent = siteContent.cta["button"];

const topTextHeader = document.querySelector(".text-content h4");
const topTextP = document.querySelector(".text-content p");

topTextHeader.textContent = siteContent["main-content"]["features-h4"];
topTextP.textContent = siteContent["main-content"]["features-content"];

const topSecondHeader = document.querySelectorAll(
  ".main-content .top-content:nth-child(1) h4"
);

const topSecondP = document.querySelectorAll(
  ".main-content .top-content:nth-child(1) p"
);

//console.log(topSecondP);

topSecondHeader[1].textContent = siteContent["main-content"]["about-h4"];

topSecondP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.querySelector("#middle-img");

midImg.src = siteContent["main-content"]["middle-img-src"];

const bottomHeading = document.querySelector(
  ".bottom-content .text-content h4"
);

const bottomP = document.querySelector(".bottom-content .text-content p");

bottomHeading.textContent = siteContent["main-content"]["services-h4"];

bottomP.textContent = siteContent["main-content"]["services-content"];

const bottomSecondHeading = document.querySelectorAll(
  ".bottom-content .text-content:nth-child(2) h4"
);

const bottomSecondP = document.querySelectorAll(
  ".bottom-content .text-content:nth-child(2) p"
);
//console.log(bottomSecondHeading);

bottomSecondHeading[0].textContent = siteContent["main-content"]["product-h4"];

bottomSecondP[0].textContent = siteContent["main-content"]["product-content"];

const bottomThirdHeading = document.querySelectorAll(
  ".bottom-content .text-content:nth-child(3) h4"
);
//console.log(bottomThirdHeading);

bottomThirdHeading[0].textContent = siteContent["main-content"]["vision-h4"];

const bottomThirdP = document.querySelectorAll(
  ".bottom-content .text-content:nth-child(3) p"
);

bottomThirdP[0].textContent = siteContent["main-content"]["vision-content"];

const contactHeading = document.querySelector(".contact h4");

contactHeading.textContent = siteContent.contact["contact-h4"];

const contactAddress = document.querySelector(".contact p");

contactAddress.textContent = siteContent.contact.address;

const contactSection = document.querySelectorAll(".contact p");
//console.log(contactSection);

contactSection[1].textContent = siteContent.contact.phone;

contactSection[2].textContent = siteContent.contact.email;

const footerP = document.querySelector("footer p");
//console.log(footerP);

footerP.textContent = siteContent.footer.copyright;

//topSecondHeader.lastChild = siteContent["main-content"]["about-h4"];

//const servContent = siteContent.nav["nav-item-1"];
//console.log(servContent);
//let services = document.querySelector("a");
//services.textContent = servContent;

//const product = document.querySelector()
