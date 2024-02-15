import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[]1.5rem">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekes and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className=" text-white opacity-70 hover:opacity-100">About us</li>
          <li className=" text-white opacity-70 hover:opacity-100">Features</li>
          <li className=" text-white opacity-70 hover:opacity-100">News</li>
          <li className=" text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className=" text-white opacity-70 hover:opacity-100">account</li>
          <li className=" text-white opacity-70 hover:opacity-100">
            Support center
          </li>
          <li className=" text-white opacity-70 hover:opacity-100">Fedback</li>
          <li className=" text-white opacity-70 hover:opacity-100">
            Contact us
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          suppport
        </span>
        <div className="grid gap-3">
          <li className=" text-white opacity-70 hover:opacity-100">Events</li>
          <li className=" text-white opacity-70 hover:opacity-100">Promo</li>
          <li className=" text-white opacity-70 hover:opacity-100">Req Demo</li>
          <li className=" text-white opacity-70 hover:opacity-100">Careers</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact us
        </span>
        <div className="grid gap-3">
          <small className="text-[14px] text-white">
            mahdikamyabi01@gmail.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="bg-white p-[4px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <AiOutlineTwitter className="bg-white p-[4px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <BsFacebook className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
