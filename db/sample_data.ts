import { hashSync } from "bcrypt-ts-edge";
import { auth } from "@/auth";

const sampleData = {
  users: [
    {
      name: "Senator",
      email: "admin@londonvibes.net",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  blog: [
    {
      headline: "LONDON VIBES RELAUNCH",
      paragraph1:
        "More flexibility on technologies we use to develop your website",
      images: ["/img/technology.jpg"],
    },
    {
      headline: "Adjustable, Adaptable eCommerce Temple ",
      paragraph1:
        "Ready for you to start selling you brand product straightaway",
      bloglinks: "https://lvl-website.vercel.app/",
      images: ["/img/eCommerce.png", "/img/eCommerce.jpg"],
    },
    {
      headline: "Manage your own website with ease",
      paragraph1: "Content management system tailored to your business needs",
      bloglinks: "https://lvl-website.vercel.app/",
      images: ["/img/dashboard.png"],
    },
  ],
};

export default sampleData;
