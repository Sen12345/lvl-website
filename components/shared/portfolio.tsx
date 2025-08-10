import { TfiAngleDoubleRight } from "react-icons/tfi";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import ContactFormPage from "../contactForm";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const Portfolio = () => {
  return (
    <div className="portfolio grid lg:gap-24 lg:grid-cols-2 transition-all gap-10">
      <div className="w-full flex justify-center lg:justify-end">
        <ul
          className={`${montserrat.className} flex flex-col transition-all gap-4 md:items-end py-6 `}
        >
          <li className="py-1  flex flex-row transition-all items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="/webdev"
              className="text-white-400 text-3xl lg:text-4xl text-white hover:text-lime-400"
            >
              Web Development
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row transition-all items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="/webdev#follow-up"
              className="text-white-400 text-3xl md:text-4xl text-white hover:text-lime-400"
            >
              Follow-up Support
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="/webdev#bespoke"
              className="text-white-400 text-3xl transition-all md:text-4xl text-white hover:text-lime-400"
            >
              Bespoke Design
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row transition-all items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="/webdev#blogging"
              className="text-white-400 text-3xl  md:text-4xl text-white hover:text-lime-400"
            >
              Your Blog Page
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row transition-all items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="webdev#ecommerce"
              className="text-white-400 text-3xl  md:text-4xl text-white hover:text-lime-400"
            >
              eCommerce
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="webdev#seo"
              className="text-white-400 text-3xl transition-all md:text-4xl text-white hover:text-lime-400"
            >
              SEO/SMO
            </Link>
            <TfiAngleDoubleRight className=" md:text-2xl text-lime-500" />
          </li>
          <li className="py-1  flex flex-row transition-all items-baseline gap-1 hover:-translate-y-1 hover:scale-110  duration-300">
            <Link
              href="webdev#cms"
              className="text-white-400 text-2xl md:text-4xl text-white hover:text-lime-400"
            >
              CMS
            </Link>
            <TfiAngleDoubleRight className="text-white-lime md:text-2xl text-lime-500" />
          </li>
        </ul>
      </div>
      <div className="w-full lg:pt-8 flex lg:justify-between justify-center-safe">
        <ContactFormPage />
      </div>
    </div>
  );
};

export default Portfolio;
