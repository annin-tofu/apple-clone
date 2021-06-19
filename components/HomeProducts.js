import React from "react";

function HomeProducts() {
  return (
    <div>
      {/* uPhone loading page */}
      <div className="grey-background">
        {/* text-6xl : */}
        <h1 className="text-6xl font-semibold text-center mt-16">uPhone 19</h1>
        {/* h1 tag, p1 tag, span tag, => all the same here */}
        <h1 className="text-4xl font-normal text-center mt-8">
          Blast From The Past.
        </h1>
        <h1 className="mt-3 text-gray-500 text-center">
          From ¥1,000,000 before trade-in <br></br>
          No Cost EMI for 600 months.
        </h1>
        <img
          //mx-auto   is used here to put the image right in the middle. otherwise the image will be squeezed to the very left
          className="mx-auto"
          // loading="lazy" => this means the website renders even if the img is not loading !!IMPORTANT AND MUST FOR FAST AND RESPONSIVE WEBSOTE CREATION!!!
          loading="lazy"
          //   used Cloudinary for PNG creation
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1624135277/Screen_Shot_2021-06-20_at_5.40.56_qbsotx.png"
        ></img>
      </div>
    </div>
  );
}

export default HomeProducts;
