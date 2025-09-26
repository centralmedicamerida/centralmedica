// src/data/menu_data.jsx

const menu_data = [
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Paginas",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/team-1", title: "Team 01" },
      { link: "/team-2", title: "Team 02" },
      { link: "/team-details", title: "Team Details" },
      { link: "/pricing-plan", title: "Pricing Plan" },
      { link: "/shop", title: "Shop" },
      { link: "/product-details", title: "Product Details" },
      { link: "/cart", title: "cart" },
      { link: "/checkout", title: "Checkout" },
      { link: "/project-details", title: "Project Details" },
      { link: "/faq", title: "FAQ's" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Servicios",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "Service 1" },
      { link: "/service-2", title: "Service 2" },
      { link: "/service-3", title: "Service 3" },
      { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contacto",
    link: "/contact",
    active: "",
  },
];

export default menu_data;
