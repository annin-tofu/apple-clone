import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
import { useEffect } from "react";
// import { useRouter } from "next/router";

// AOS.init();

// AOS.init();

// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: "aos-init", // class applied after initialization
//   animatedClassName: "aos-animate", // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: "ease", // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
// });

// const router = useRouter();

function HomeProducts(props) {
  useEffect(() => {
    //duration   is animation length /milli seconds
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* uPhone loading page */}
      {/* AOS effects. Check https://michalsnik.github.io/aos/   TRY "fade-up"; fade-down ; flip-down; etc...  For real apple feeling, use flip-down */}
      <div className="grey-background" data-aos="fade-up">
        {/* text-6xl : */}
        <h1 className="text-6xl font-semibold text-center mt-16">uPhone 19</h1>
        {/* h1 tag, p1 tag, span tag, => all the same here */}
        <h1 className="text-4xl font-normal text-center mt-8">
          Blast From The Past.
        </h1>
        <h1 className="mt-3 text-gray-500 text-center">
          From ONLY ¥1,820,000 before trade-in <br></br>
          No Cost EMI for 120 months.
        </h1>
        <div className="mt-5 text-xl text-center">
          <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
            Learn More
          </span>
          <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
            Buy
          </span>
        </div>
        <img
          //mx-auto   is used here to put the image right in the middle. otherwise the image will be squeezed to the very left
          className="mx-auto"
          // loading="lazy" => this means the website renders even if the img is not loading !!IMPORTANT AND MUST FOR FAST AND RESPONSIVE WEBSOTE CREATION!!!
          loading="lazy"
          //   used Cloudinary for PNG creation
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624135277/Screen_Shot_2021-06-20_at_5.40.56_qbsotx.png"
        ></img>
      </div>

      {/* day 2___ for second product under uphone 12 div. it is a basically a same as uphone19. but with black background and white-text*/}
      <div
        className="bg-black text-white justify-center"
        data-aos="zoom-in-down"
      >
        {/* double <br></br> to create top margin  */}
        <br></br>
        <br></br>
        <h1 className="text-6xl font-semibold text-center mt-16">
          uPhone 19 Pro
        </h1>
        <h1 className="text-4xl font-normal text-center mt-8">
          It's an intercalary year.
        </h1>
        <h1 className="mt-3 text-gray-500 text-center">
          From ONLY ¥2,480,000 before trade-in <br></br>
          No Cost EMI for 120 months.
        </h1>
        <div className="mt-5 text-xl text-center">
          <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
            Learn More
          </span>
          <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
            Buy
          </span>
          <img
            //   justify-center can replace mx-auto below
            className="justify-center"
            loading="lazy"
            className="uPhone-19-max-image"
            src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624285479/Screen_Shot_2021-06-21_at_23.24.29_temfgi.png"
          ></img>
        </div>
        <br className="grey-background"></br>
        <br className="grey-background"></br>
      </div>

      {/* uMac and uPad Pro div*/}
      <div className="flex flex-row items-stretch" data-aos="zoom-in-down">
        {/* uMac  */}
        <div className="grey-background">
          {/* double <br></br> to create top margin  */}
          <br></br>
          <br></br>
          <h1 className="text-4xl font-semibold text-center mt-8">uMac</h1>
          <h1 className="text-2xl font-normal text-center mt-6">Say what?</h1>
          <div className="mt-5 text-xl text-center">
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Learn More
            </span>
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Buy
            </span>
            <img
              //   justify-center can replace mx-auto below
              className="mx-auto"
              loading="lazy"
              className="uMac-image"
              src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624297309/Screen_Shot_2021-06-22_at_2.41.42_kcpcuj.png"
            ></img>
          </div>
        </div>

        {/* uPad Pro */}
        <div className="bg-black text-white">
          {/* double <br></br> to create top margin  */}
          <br></br>
          <br></br>
          <h1 className="text-4xl font-semibold text-center mt-8">uPad Pro</h1>
          <h1 className="text-2xl font-normal text-center mt-6">
            Turbocharged with the U1 Chip.
          </h1>
          <div className="mt-5 text-xl text-center">
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Learn More
            </span>
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Buy
            </span>
            <img
              //   justify-center can replace mx-auto below
              className="mx-auto"
              loading="lazy"
              className="uPad-Pro-image"
              src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624297125/Screen_Shot_2021-06-22_at_2.38.34_ouxjmo.png"
            ></img>
          </div>
        </div>
      </div>

      {/* Watch and AirTag div */}
      <div className="flex flex-row items-stretch" data-aos="fade-up">
        {/* Watch */}
        <div className="bg-black text-white">
          {/* double <br></br> to create top margin  */}
          <br></br>
          <br></br>
          <h1 className="text-4xl font-semibold text-center mt-8">Watch</h1>
          <h1 className="text-2xl font-normal text-center mt-6">
            I know you want it.
          </h1>
          <div className="mt-5 text-xl text-center">
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Learn More
            </span>
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Buy
            </span>
            <img
              //   justify-center can replace mx-auto below
              className="mx-auto"
              loading="lazy"
              className="Watch-image"
              src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624300011/Screen_Shot_2021-06-22_at_3.26.24_p5suaa.png"
            ></img>
          </div>
        </div>

        {/* AirTag */}
        <div className="grey-background">
          {/* double <br></br> to create top margin  */}
          <br></br>
          <br></br>
          <h1 className="text-4xl font-semibold text-center mt-8">AirTag</h1>
          <h1 className="text-2xl font-normal text-center mt-6">
            Will never lose things!
          </h1>
          <div className="mt-5 text-xl text-center">
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Learn More
            </span>
            <span className="mr-5 text-blue-600 hover:border-b-2 border-blue-600">
              Buy
            </span>
            <img
              //   justify-center can replace mx-auto below
              className="mx-auto"
              loading="lazy"
              className="AirTag-image"
              src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624301991/Screen_Shot_2021-06-22_at_3.59.41_gyg3w9.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
