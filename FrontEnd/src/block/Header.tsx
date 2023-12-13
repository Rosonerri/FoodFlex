import img from "../assets/image3.png"
import img4 from "../assets/fineGirl.jpg"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
 
  return (
    <div className="border-b w-[100%] h-[60px] flex items-center justify-center sticky top-[0%] left-[0px]  bg-white z-50">
      <div className="w-[95%] h-[100%] flex items-center justify-between bg-white">
        <div className="font-[600]">Welcome, Gabriel Ajayi</div>
        <div className="flex  w-[400px] h-[40px] justify-center border items-center text-[15px] rounded-[20px]">
        <CiSearch  className="text-[#39A88E] w-[40px]"/>
          <input type="text" placeholder="What do you want to buy today...."  className="flex w-[100%] justify-between font-[500] text-[11px] outline-0 h-[30px] rounded-[20px]"/>
        </div>
        <div className="flex justify-between items-center w-[10%] h-[60%] text-[27px]">
          <div className="rounded-[50%] w-[40px] h-[40px] overflow-hidden">
          <img src={img4} alt="" />
          </div>
        <CiHeart />
        <div className="border py-3"></div>
        <IoCartOutline className="mr-[10px] cursor-pointer"
        onClick = {() =>{
          setToggle(!toggle)
        }} 
        />
        <div className="w-[20px] h-[20px] absolute bg-[crimson] rounded-[50%] flex justify-center items-center text-[white] font-[700] text-[14px] right-[36px] top-[10px] cursor-pointer">2</div>
       {toggle && (
         <div className="border shadow-md w-[300px] h-[430px] bg-[white] absolute left-[76%] top-[90%] rounded-md flex items-center flex-col">
         <div className="text-[15px] text-center font-semibold mb-[10px]">Tomatoes</div>
         <div className="w-[95%] h-[70px] flex items-center justify-center border-b">
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
             <img src={img} alt="" className="w-[70px] object-cover" />
           </div>
           <div className="w-[31%] h-[100%]  text-[15px] items-center flex justify-center font-bold">
             <span className="mr-[30px]">1</span>
             <span  className="text-[#FF6A25]">$233.00</span>
           </div>
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
           <MdDeleteForever className="cursor-pointer"/>
           </div>
         </div>
         <div className="text-[15px] text-center font-semibold mb-[10px]">Provisions</div>
         <div className="w-[95%] h-[70px] flex items-center justify-center border-b">
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
             <img src={img} alt="" className="w-[70px] object-cover" />
           </div>
           <div className="w-[31%] h-[100%]  text-[15px] items-center flex justify-center font-bold">
             <span className="mr-[30px]">1</span>
             <span  className="text-[#FF6A25]">$233.00</span>
           </div>
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
           <MdDeleteForever className="cursor-pointer"/>
           </div>
         </div>
         <div className="text-[11px] text-center font-semibold mb-[10px] flex justify-between w-[95%] mt-[10px]">
           <h3>Subtotal:</h3>
           <h3>$266</h3>
         </div>
         <div className="text-[15px] text-center font-semibold mb-[10px] flex justify-between w-[95%] mt-[20px]">
           <div className="absolute w-[94%] rounded-[20px] bg-[grey] h-[11px]"></div>
           <div className="absolute w-[10%] rounded-[20px] bg-[#FF6A25] h-[11px]"></div>
           
         </div>
         <div className="text-[10px] font-semibold mt-[20px]">Spend $1,080.00 more to reach FREE SHIPPING!</div>
         <div className="flex text-[11px] mt-[30px]">
           <button className="py-2 px-2 bg-black text-[white] font-[600] rounded-md">View Cart</button>
           <button className="py-2 px-2 bg-[#FF6A25] text-[white] font-[600] rounded-md ml-[10px]">CheckOut</button>
         </div>
         </div>
       )}
        </div>
      </div>
    </div>
  )
}

export default Header