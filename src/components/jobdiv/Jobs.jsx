import { BiTimeFive } from "react-icons/bi";
const data = [
  {
    id:1,
    title: 'web Developer',
    time: 'now',
    location: 'canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:2,
    title: 'UI Designer',
    time: '14Hrs',
    location: 'United state',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:3,
    title: 'Software Eng',
    time: '20Hrs',
    location: 'Austria',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:4,
    title: 'UI/UX Designer',
    time: '21Hrs',
    location: 'iran',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:5,
    title: 'Product Designer',
    time: '2Hrs',
    location: 'india',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:6,
    title: 'Team Lead',
    time: '10 Days',
    location: 'india',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:7,
    title: 'Data Scientist',
    time: '21 Days',
    location: 'china',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
  {
    id:8,
    title: 'Researcher',
    time: '33 Days',
    location: 'United kingdom',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum sit unde veritatis ab placeat commodi non,',
    company: 'Novac',
  },
]
function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        {data.map(({id,title,time,location,desc}) => {
            return (
                <div key={id} className=" singleJob w-[250px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-gryIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
            <span className="flex items-center text-[#ccc] gap-1">
            <BiTimeFive />{time}
            </span>
          </span>
          <h6 className="text-[#ccc]">{location}</h6>
          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>
          <div className="company flex items-center gap-2">
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover/item:text-textColor hover:text-white hover:bg-blueColor">Apply Now</button>
        </div>
            )
        })}
      </div>
    </div>
  )
}

export default Jobs