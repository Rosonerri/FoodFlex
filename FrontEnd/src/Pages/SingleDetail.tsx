import img from "../assets/image3.png"
// import { useParams } from "react-router-dom"

const SingleDetail = () =>{
  // const {productId} = useParams();

    return (
      <div className="">
        <div className="w-[100%] h-[100%] flex flex-wrap">
          <div className="border w-[500px] h-[500px] shadow-md">
            <img src={img} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[745px] h-[500px]">
            <div className="p-4 text-[30px] font-[600]">Meat and Seafoods</div>
            <div className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis commodi qui maiores quisquam possimus quasi maxime animi ad dolore in doloribus, consectetur, eos minus illo laboriosam voluptate. Nam, sequi.</div>
            <div  className=" flex justify-between p-4">
            <div className="flex text-[11px] w-[20%] justify-between">
              <div className="w-[100px]"><span className="font-[700]">5 stars</span> Likes</div>
              <div className="w-[100px]"><span className="font-[700]">7</span> reviews</div>
              </div>
              <div className="w-[20%] flex justify-end text-[11px]">
              <div><span className="font-[700] mr-[5px]">10</span> Star rating</div>
            </div>
            </div>

            <div  className=" flex justify-between p-4 mt-[100px]">
            <div className="flex text-[11px] w-[20%] justify-between">
            <div className="py-2 px-2 rounded-md font-[700] cursor-pointer hover:bg-[white] hover:text-[black] transition-all border text-[white] bg-black">Likes</div>
              <div className="py-2 px-2 rounded-md font-[700] cursor-pointer hover:bg-[white] hover:text-[black] transition-all border text-[white] bg-[#FF6C37]">Add to Cart</div>
              </div>
              <div className="w-[20%] flex justify-end text-[11px]">
              <div className="text-[13px]"><span className="font-[700] mr-[5px] text-[20px]">$</span>$45.00</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleDetail;