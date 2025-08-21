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
      userId: "f56d949e-b885-4138-9d8c-86489025838c",
      headline: "LONDON VIBES RELAUNCH",
      paragraph1:
        "More flexibility on technologies we use to develop your website",
      paragraph2:
        "More flexibility on technologies we use to develop your website",
      bloglinks: "https://lvl-website.vercel.app/",
      slug: "DDDDttD",
      images: ["/img/technology.jpg"],
    },
    {
      userId: "f56d949e-b885-4138-9d8c-86489025838c",
      headline: "Adjustable, Adaptable eCommerce Temple ",
      paragraph1:
        "Ready for you to start selling you brand product straightaway",
      paragraph2:
        "More flexibility on technologies we use to develop your website",
      bloglinks: "https://lvl-website.vercel.app/",
      slug: "DDDDDww",
      images: ["/img/eCommerce.png", "/img/eCommerce.jpg"],
    },
    {
      userId: "f56d949e-b885-4138-9d8c-86489025838c",
      headline: "Manage your own website with ease",
      paragraph1: "Content management system tailored to your business needs",
      paragraph2:
        "More flexibility on technologies we use to develop your website",
      bloglinks: "https://lvl-website.vercel.app/",
      slug: "DDDDDrr",
      images: ["/img/dashboard.png"],
    },
  ],
};

export default sampleData;
