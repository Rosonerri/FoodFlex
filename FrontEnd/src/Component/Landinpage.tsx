import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/Wrist.png"
const Landingpage = () => {
    return (
      <div className="bg-[#080D20] w-[100%] h-[90%] flex justify-center">
        <div className=" w-[95%] min-h-[90%] flex items-center justify-between flex-wrap">
          <div className="flex items-center w-[45%]"><img src={img} alt="" className="w-[540px] mt-[10px]"/></div>
          <div className="w-[45%] ">
            <div className="text-[white] text-[14px]">HYBRID SMARTWATCHES</div>
            <div  className="text-[white] text-[50px]  font-[700]">Wearable health you'll want to wear</div>
            <div  className="text-[white] text-[14px]">Explore a range of hybrid smarthwatches crafted to track, monitor and improve overall health and wellness. Powered by state-of-the-art-technology, sapa trackers are renowned for their award-winning design and unsurpassed battery life</div>
            <div className="text-[white] mt-[50px]">#1</div>
            <div className="text-[#FF6A25]">WORLDWIDE</div>
            <div  className="text-[white] ">Sapa Invented The First Hybrid Smart Watch</div>
            <button className="bg-[#FF6A25] rounded-sm flex py-2 px-7 text-[white] items-center mt-[15px]">
              Buy now
              <FaArrowRight  className="text-[white] text-[14px] ml-[5px]"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Landingpage;