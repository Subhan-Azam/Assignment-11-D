import VerifyPage from "../(components)/verifyPage/verifyPage";
import PortfolioCard from "./(components)/portfolioCard/portfolioCard";

import img1 from "../../public/img/online-shopping-in-Pakistan.jpg";
import img2 from "../../public/img/fruiting.jpg";
import img3 from "../../public/img/photo-1481437156560-3205f6a55735.jpeg";
import img4 from "../../public/img/image2.jpg";
import img5 from "../../public/img/SouthParkShootCRVA-87.jpg";
import img6 from "../../public/img/360_F_325700552_5QJD12HDtfii4xkGXnjLworiJMedgZQc.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="my-14">
        <div className="mb-6 max-w-[930px] m-auto">
          <VerifyPage verifyPage={"Portfolio Page"} />
          <h1 className="flex text-3xl font-bold">
            TAKE A LOOK AT OUR LATEST WORK
          </h1>
        </div>
        <div className="flex justify-center m-auto flex-wrap max-w-[1000px]">
          <div className="mx-4 my-5">
            <PortfolioCard src={img1} />
          </div>
          <div className="mx-4 my-5">
            <PortfolioCard src={img2} />
          </div>
          <div className="mx-4 my-5">
            <PortfolioCard src={img3} />
          </div>
          <div className="mx-4 my-5">
            <PortfolioCard src={img4} />
          </div>
          <div className="mx-4 my-5">
            <PortfolioCard src={img5} />
          </div>
          <div className="mx-4 my-5">
            <PortfolioCard src={img6} />
          </div>
        </div>
      </div>
    </>
  );
}
