import Portfolio from "@/components/shared/portfolio";
import Image from "next/image";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = () => {
  // await delay(4000);
  return (
    <>
      <section className=" bg-[url(/img/towerbgidge.jpg)] hover:-translate-y-1 hover:scale-105  duration-300 bg-fixed transition-all bg-cover border-b bg-center  py-20">
        <Portfolio />
      </section>
      <section id="about" className="w-full px-4 border-b ">
        <div className="grid  lg:grid-cols-2 gap-4 ">
          <Image
            alt="About Image"
            height={600}
            width={600}
            quality={80}
            src="/img/digitize1-min.jpg"
            priority={true}
            placeholder="blur"
            blurDataURL="data:/img/digitize1-min.jpg"
            className="w-full pt-4 lg:py-0"
          />

          <div className="flex flex-col  justify-center">
            <h1 className="py-4  text-3xl text-center  text-lime-500">
              Who We Are
            </h1>

            <div>
              <p className="text-lead text-xl ">
                London based Web Developers, we design and develop Web
                applications, Websites and CMS from scratch paper. Since 2015 we
                have being programmatically helping businesses and individual
                clients to achieve their online business objectives.
                <br />
                <br />
              </p>
              <p className="text-lead text-xl ">
                We believe the user should have the best experience on each
                visit to a website or having explored the use of any user
                interface. This is why User Experience (UX) and User Centered
                Design (UCD) is our major focus throughtout the life cycle of
                each web development project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="servicess mt-10 lg:mt-32 px-4 border-b">
        <div className="grid  lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center  ">
            <h1 className=" pb-4 text-3xl  text-center text-lime-500">
              What We Do
            </h1>

            <div>
              <p className="text-lead  text-xl">
                We specialise in web solutions development that includes, Web
                Application Development, Database Design, SEO and SMO for
                websites, Site Maintenance and Web application Upgrades.
                <br />
              </p>
              <p className="text-lead pb-4 text-xl">
                We provide web application services from small businesses to
                large enterprises. We also negotiate and honour Short-term and
                long-term contracts with businesses from all reputable and legal
                backgrounds. We provide online and over the phone guidance and
                support.
              </p>
            </div>
          </div>

          <Image
            width={600}
            height={600}
            alt="About Image"
            priority={true}
            quality={80}
            src="/img/00.jpg"
            className="w-full  "
          />
        </div>
      </section>
      <section id="mission" className="w-full mt-4 lg:mt-32 px-4 border-b">
        <div className="grid  lg:grid-cols-2 gap-4">
          <Image
            width={600}
            height={600}
            alt="About Image"
            priority={true}
            quality={80}
            src="/img/B-Repertoire12-min.jpg"
            className="w-full "
          />

          <div className="flex flex-col justify-center  ">
            <h1 className=" py-4 text-3xl  text-center text-lime-500">
              Our Mission
            </h1>

            <div>
              <p className="text-lead text-xl  ">
                Inspire you to become more aware of threats from your
                competitors. A successful business invest in building a good
                reputation and a strong client relationship. Our goals are to
                help you acheive your goals on the web and gain your trust. We
                want to turn your online objectives into relevant web features
                and influence a possible turn of your business ideas into
                tangible revenues.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="how" className="w-full mt-10 lg:mt-32 px-4">
        <div className="grid  lg:grid-cols-2 gap-4 ">
          <div className="flex flex-col justify-center w-full ">
            <h1 className=" py-4 text-center text-3xl  text-lime-500">
              How We Do It?
            </h1>

            <div>
              <p className="text-lead text-xl pb-4 ">
                We are always making sure that we are up-to-date with the
                relevant technologies for our web development projects, evaluate
                and analyse your service request to match your business model,
                ensure design and development are within complience of web
                standards, ensure designs are tailored towards your target
                audience through research, survey, technological analysis and
                user testing. Our developers are flexible on various web
                development tools and are ready to help you make your online
                goals acheivable.
              </p>
            </div>
          </div>

          <Image
            width={600}
            height={600}
            alt="About Image"
            priority={true}
            quality={80}
            src="/img_slide/img_02.png"
            className="w-full "
          />
        </div>
      </section>
    </>
  );
};

export default Homepage;
