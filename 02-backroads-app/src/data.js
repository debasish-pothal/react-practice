import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const links = [
  { id: "mainLink1", href: "#home", text: "Home" },
  { id: "mainLink2", href: "#about", text: "About" },
  { id: "mainLink3", href: "#services", text: "Services" },
  { id: "mainLink4", href: "#tours", text: "Tours" },
];

export const footerLinks = [
  { id: "mainLink1", href: "#home", text: "Home" },
  { id: "mainLink2", href: "#about", text: "About" },
  { id: "mainLink3", href: "#services", text: "Services" },
  { id: "mainLink4", href: "#featured", text: "featured" },
];

export const socialLinks = [
  { id: "socialLink1", href: "https://www.twitter.com", icon: "fa-twitter" },
  { id: "socialLink2", href: "https://www.facebook.com", icon: "fa-facebook" },
  {
    id: "socialLink3",
    href: "https://www.squarespace.com",
    icon: "fa-squarespace",
  },
];

export const services = [
  {
    id: "service1",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: "service2",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: "service3",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: "tour1",
    thumbNail: tourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    location: "china",
    duration: "6 days",
    price: "from $2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: "tour2",
    thumbNail: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    location: "indonesia",
    duration: "11 days",
    price: "from $1400",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: "tour3",
    thumbNail: tourImg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    location: "hong kong",
    duration: "8 days",
    price: "from $5000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: "tour4",
    thumbNail: tourImg4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    location: "kenya",
    duration: "20 days",
    price: "from $3300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
