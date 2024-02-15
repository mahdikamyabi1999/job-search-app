import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
function Search() {
  return (
    <div className="searchDiv grid gap-10 bg-gryIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gryIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Serch Job Here"
            />
            
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Serch By company"
            />
            
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon " />
            <input
              type="text"
              className=" bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Serch By Location"
            />
            
          </div>
          <button className=" bg-blueColor h-full p-5 px-10 hover:bg-blue-300 rounded-[10px] text-white">
            Serach
          </button>
        </div>
      </form>




      <div className="secDiv flex items-center gap-10 justify-center">
      <div className="singlesearch flex items-center gap-2">
        <label htmlFor="relevance" className="text-[#808080] font-semibold">
          Sort By:
        </label>
        <select
          name=""
          id="relevance"
          className="bg-white rounded-[3px] px-4 py-1"
        >
          <option value="">Relevance</option>
          <option value="">Inclusive</option>
          <option value="">Starts With</option>
          <option value="">Contains</option>
        </select>
        </div>
      <div className="singlesearch flex items-center gap-2">
        <label htmlFor="level" className="text-[#808080] font-semibold">
          Level:
        </label>
        <select
          name=""
          id="level"
          className="bg-white rounded-[3px] px-4 py-1"
        >
          <option value="">Senior</option>
          <option value="">Beginner</option>
          <option value="">Intermidiate</option>
          <option value="">Advocate</option>
        </select>
        </div>
      <div className="singlesearch flex items-center gap-2">
        <label htmlFor="type" className="text-[#808080] font-semibold">
          Type:
        </label>
        <select
          name=""
          id="type"
          className="bg-white rounded-[3px] px-4 py-1"
        >
          <option value="">Full-time</option>
          <option value="">Remote</option>
          <option value="">Contract</option>
          <option value="">Part-time</option>
        </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
      
    </div>
  );
}

export default Search;
