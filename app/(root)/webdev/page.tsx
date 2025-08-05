import Image from "next/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const WebDev = () => {
  return (
    <>
      <section className="bg-[url('/img/webdev2.jpg')] bg-fixed bg-cover min-h-screen bg-center "></section>
      <section
        id="dev-summary "
        className=" relative w-full transition-all h-full px-4"
      >
        <div className="w-full   webdev-description">
          <div className="lg:w-8/12  m-auto ">
            <h1 className="text-lime-500 font-semibold text-3xl py-6 px-0">
              Web Development Summary
            </h1>

            <p className=" px-0 text-xl ">
              Web development in the digital age can be very overwhelming,
              giving the enormous amount of different technologies required to
              build a fully functioning website. It&apos;s unimaginable how
              technology has evolved since the days when you could build a
              complete website using only one software like Microsoft Frontpage
              and a Cascading Stylesheet.
            </p>
            <p className=" px-0  text-xl py-4">
              At Vibes, we are here with highly trained developers ready to take
              the worries away from you.
            </p>

            <ul className="flex-col gap-2">
              <li className="flex  pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                Evaluate all features and functionalities required
              </li>

              <li className="flex  pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                Determine layouts and design structure through team
                collaborative evaluation
              </li>

              <li className="flex  pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                Ensure design matches client&apos;s requirements
              </li>
              <li className="flex  pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                We make sure clients play a part in our design decisions
              </li>
              <li className="flex items-start pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                We code your website backend and frontend with cutting edge
                technologies.
              </li>
              <li className="flex items-start pb-2 gap-2">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                We carry out rigorous testing on your website including user
                testing, functional testing, end-to-end testing, cross browser
                and device testing.
              </li>
              <li className="flex items-start pb-2 gap-2 ">
                <span className="fa fa-li">
                  <IoCheckmarkDoneSharp />
                </span>
                We deploy your fully functioning website to your specified
                domain.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="cms"
        className="w-full pt-8 transition-all  relative h-full px-4"
      >
        <div className="w-full  webdev-description">
          <div className="lg:w-8/12  m-auto ">
            <div className="w-full">
              <Image
                height="500"
                width="500"
                quality={80}
                property="true"
                className=" w-full design"
                src="/img/cms.jpg"
                alt="Image"
              />
            </div>
            <div className="py-4">
              {/* <h1 className="text-lime-500 font-semibold text-3xl  p-3 ">
                CMS
              </h1> */}
              <p className=" text-xl">
                Ok, it&apos;s the beginning of the day, you are at your office
                or maybe working from home, everything is going according to
                plan until, you realise you need to update your website through
                Cpanel on a shared hosting, or you might have to pay a web
                developer to correct a spelling error.
              </p>
              <p className=" text-xl">
                We not just build you intuitive web interfaces, we also build
                intuitive content management system behind your website so that
                you can create, edit, update and delete content just as
                stress-free as having a slice of cake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="blogging"
        className="pt-8 transition-all relative h-full px-4"
      >
        <div className="w-full  webdev-description">
          <div className="lg:w-8/12 m-auto gap-4 lg:flex">
            <Image
              height={50}
              width={200}
              quality={80}
              className="w-full design rounded "
              src="/img/Blogging.jpg"
              alt="Blogging"
            />
            <div className="flex py-4 flex-col justify-center">
              <h1 className="text-lime-500 text-3xl  py-4 font-semibold  ">
                Your Blog Page
              </h1>
              <p className=" text-xl">
                Everyone is excited about having a new website but not every one
                know what to do next. If you are in this situation then,
                including a blog page on your website is your way forward. Not
                knowing what to blog can sometimes make you feel lack of courage
                to engage in this powerful adventure. Whether you are an
                established business or a new start-up, there will always be
                something you need to update your clients about, for example, a
                new product, a new service, something inspirational to say to
                your clients, you&apos;ve done something for charity, your
                company has participated in a public event, or even a gratitude
                blog post.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="follow-up"
        className=" pt-8 transition-all relative  h-full px-4"
      >
        <div className="w-full webdev-description ">
          <div className="lg:w-8/12 m-auto">
            <div className="flex py-4 items-center">
              <div>
                <h1 className="text-lime-500 text-3xl py-4 font-semibold   ">
                  Follow Up Support
                </h1>
                <p className=" text-xl">
                  All our follow-up support are carried out through Zoom, Teams,
                  Skype and over the phone at your request.
                </p>
              </div>
            </div>
            <Image
              height={500}
              width={500}
              quality={80}
              className="w-full design rounded "
              src={"/img_slide/support.jpg"}
              alt="Follow up support"
            />
          </div>
        </div>
      </section>
      <section
        id="bespoke"
        className=" pt-8 transition-all relative h-full px-4"
      >
        <div className="w-full webdev-description ">
          <div className="lg:w-8/12  m-auto ">
            <h1 className="text-lime-500 text-3xl pt-4 font-semibold ">
              Bespoke Design
            </h1>
            <p className="py-4 text-xl">
              We want to help you harness the full capacity of the internet and
              connect with your clients. We take pleasure in making sure we
              match all your design objectives and acheive all the goals you
              expect from your website.
            </p>

            <Image
              height={500}
              width={500}
              className="w-full design rounded"
              src="/img/Bespoke.jpg"
              alt="Bespoke"
            />
          </div>
        </div>
      </section>
      <section
        id="ecommerce"
        className=" pt-8 transition-all relative h-full px-4"
      >
        <div className="w-full  webdev-description ">
          <div className="lg:w-8/12  m-auto lg:flex">
            <div className="flex flex-col justify-center pb-4 lg:pb-0 px-2">
              <h1 className="text-lime-500 text-3xl  font-semibold pb-3   ">
                eCommerce
              </h1>
              <p className="text-xl">
                Our eCommerce development is driven towards making the design of
                your website come to life and function as it should. A client
                should be able to visit your website and purchase a product with
                ease, in a highly secure online shopping environment.
              </p>
              <p className="text-xl">
                We make sure that your website is fully responsive and adaptive
                because this will enhance your clients shopping experience on
                each visit to your website.
              </p>
            </div>
            <Image
              height={0}
              width={500}
              className="w-full "
              src="/img/eCommerce1.jpg"
              alt="eCommerce"
            />
          </div>
        </div>
      </section>
      <section id="seo" className=" pt-8 transition-all relative h-full px-4">
        <div className="w-full   webdev-description">
          <div className="lg:w-8/12  m-auto ">
            <div className="py-4">
              <h1 className="text-lime-500 pb-4 text-3xl  font-semibold">
                SEO/SMO
              </h1>
              <p className=" text-xl">
                Despite the rapid advancement of Social Media Marketing (SMO),
                SEO is still one of the most effective way of driving traffic to
                your website. The evolution of SMO has now become a vital
                enhancement to website optimization.
              </p>
              <p className=" text-xl">
                We apply SEO best practices throughout the life cycle of each
                web development project. This includes ensuring that your web
                contents are easy for search engines to crawl and understand. It
                is very important to have compelling keywords on your web pages,
                this will help land your website on Google ranking first page
                search results. Keywords do matter, SSL, unique naming of your
                brand, natual backlinks, maintaining a good reputation on your
                services, blogging, hash-tagging, posting on social media, these
                are all compelling and cost-effective tool for optimising your
                website.
              </p>
            </div>
            <Image
              height={0}
              width={500}
              className="w-full design rounded "
              src="/img/seo1.jpg"
              alt="SEO"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDev;
