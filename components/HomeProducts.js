import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
import { useEffect } from "react";

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
      <div className="bg-black text-white">
        {/* double <br></br> to create top margin  */}
        <br></br>
        <br></br>
        <h1 className="text-6xl font-semibold text-center mt-16">
          uPhone 19 Pro
        </h1>
        <h1 className="text-4xl font-normal text-center mt-8">
          It's a leap year.
        </h1>
        <h1 className="mt-3 text-gray-500 text-center">
          From ONLY ¥2,480,000 before trade-in <br></br>
          No Cost EMI for 120 months.
        </h1>
        <img
          //   justify-center can replace mx-auto below
          className="mx-auto"
          loading="lazy"
          className="uPhone-19-max-image"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624285479/Screen_Shot_2021-06-21_at_23.24.29_temfgi.png"
        ></img>
      </div>
    </div>
  );
}

export default HomeProducts;
