import img from "../assets/image3.png"
import img2 from "../assets/image4.png"
import { MdDeleteForever } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Sider2 = () => {
  return (
    <div className="w-[320px] h-[100vh] fixed">
     <div className="border shadow-md w-[320px] h-[100%] bg-[white] flex items-center flex-col">
      <div className="text-[11px] font-[700] mr-[180px]">Your Balance</div>
        <div className="border w-[250px] h-[120px] mt-[10px] rounded-[10px] flex justify-center items-center bg-[#6fae9c]">
          <div className=" w-[80%] h-[70%] flex justify-between items-center ">
            <div className="border w-[48%] h-[100%] rounded-[10px] shadow-md bg-[white]">
            <div className="text-[11px] font-[700] mr-[180px] mt-[10px] ml-[3px]">Balance</div>
            <div className="text-[13px] font-[700] mr-[180px] mt-[10px] ml-[3px] ">$12,234.50</div>
            </div>
            <div className="w-[48%] h-[100%] rounded-[10px] flex justify-between items-center flex-wrap bg-[white]">
                  <div className="border w-[48%] h-[50%] rounded-[10px] flex justify-center items-center shadow-md cursor-pointer">
                  <FaUpload />
                  </div>
                  <div className="border w-[48%] h-[50%] rounded-[10px] flex justify-center items-center shadow-md cursor-pointer">
                  <FaDownload />
                  </div>
                  <div className="w-[50%] h-[50%] rounded-[10px] flex justify-center items-center text-[10px] font-[700]">
                    Top-up
                  </div>
                  <div className="w-[50%] h-[50%] rounded-[10px] flex justify-center items-center text-[10px] font-[700]">
                  Transfer
                  </div>
            </div>
          </div>
        </div>
         <div className="text-[10px] font-[700] mr-[180px] text-[grey]">Your Address</div>
         <div className="text-[10px] font-[700] mr-[180px] flex justify-between items-center  w-[78%] ml-[185px]">
        <div className="flex justify-between items-center mt-[5px]">
        <IoLocationSharp />
          15, Daramola str
        </div>
        <div className="border bg-[#6fae9c] p-1 rounded-md">Change</div>
          </div>
          <div className="text-[10px] font-[700] mr-[185px] flex justify-center items-center w-[78%] ml-[185px] mt-[5px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. accusamus illo totam modi est sit. 
          </div>
          <div className="flex mt-[8px] mb-[10px]">
          <div className="text-[8px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add Details</div>
          <div className="text-[8px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer ml-[40px]">Add Note</div>
          </div>
         <div className="w-[95%] h-[70px] flex items-center justify-center border-b">
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
             <img src={img2} alt="" className="w-[70px] object-cover" />
           </div>
           <div className="w-[31%] h-[100%]  text-[15px] items-center flex justify-center font-bold">
             <span className="mr-[30px]">1</span>
             <span  className="text-[#FF6A25]">$233.00</span>
           </div>
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
           <MdDeleteForever className="cursor-pointer"/>
           </div>
         </div>
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
        
         <div className="text-[10px] font-semibold mt-[20px]">Spend $1,080.00 more to reach FREE SHIPPING!</div>
         <div className="flex text-[11px] mt-[30px]">
           <button className="py-2 px-2 bg-black text-[white] font-[600] rounded-md">View Cart</button>
           <button className="py-2 px-2 bg-[#FF6A25] text-[white] font-[600] rounded-md ml-[10px]">CheckOut</button>
         </div>
         </div>
    </div>
  )
}

export default Sider2