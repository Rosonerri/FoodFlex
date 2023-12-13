import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { changeToggle, logOut } from '../Global/reduxState';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaClipboard } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaVenusDouble } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GiArmorUpgrade } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";

const Sider = () => {
    const dispatch = useDispatch();
    const readToggle = useSelector((state: any) =>{
        return state.toggle;
    });
  return (
    <div className=' border-r h-[100vh] transition-all duration-300 fixed z-40 bg-[#cfe0dc] flex items-center flex-col overflow-hidden' 
    style={{
        width: `${readToggle ? "170px" : "70px"}`
    }}
    >
       <div className='m-3'>
      {readToggle ? (
         <div className='cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-[#39A88E] flex items-center justify-center  left-[10px]'
         onClick={() => {
            dispatch(changeToggle(false))
         }}
         >
         <FaAngleLeft size ={35} className="text-[white]"/> 
      </div>

      
      ) : (
        <div className='cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-[#39A88E] flex items-center justify-center'
        onClick={() => {
            dispatch(changeToggle(true))
        }}
        >
      <FaAngleRight size ={35} className="text-[white]"/>
      </div>
      )}
       </div>
       {readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md border flex items-center justify-around cursor-pointer text-[15px]'>
         <FaClipboard className='mr-[5px] text-[#39A88E]' />
         DashBoard
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <FaClipboard className='mr-[5px] text-[#39A88E] text-[25px]' />
      </div>
       )}
    

    {readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px] mt-[40px]'>
         <TbTruckDelivery className='mr-[5px] text-[#39A88E]' />
         <div className='text-[11px] font-[600]'>Food Order</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-center cursor-pointer text-[15px]'>
        <TbTruckDelivery className='mr-[5px] text-[#39A88E] text-[19px] mt-[40px]' />
      </div>
       )}

{readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
         <FaVenusDouble className='mr-[15px] text-[#39A88E]' />
         <div className='text-[11px] font-[600]'>Favourite</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <FaVenusDouble className='mr-[5px] text-[#39A88E] text-[19px] mt-[20px]' />
      </div>
       )}

{readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
         <FaViber className='mr-[5px] text-[#39A88E]' />
         <div className='text-[11px] font-[600]'>Message</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <FaViber className='mr-[5px] text-[#39A88E] text-[19px] ' />
      </div>
       )}

{readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
         <MdHistory className='mr-[15px] text-[#39A88E]' />
         <div className='text-[11px] font-[600]'>History</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <MdHistory className=' text-[#39A88E] text-[19px]' />
      </div>
       )}

{readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-center cursor-pointer text-[15px]'>
         <FaRegMoneyBill1 className='mr-[15px] text-[#39A88E]' />
         <div className='text-[11px] font-[600] ml-[40px]'>Bills</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <FaRegMoneyBill1 className='mr-[5px] text-[#39A88E] text-[19px]' />
      </div>
       )}

{readToggle ? (
         <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
         <IoSettings className='mr-[5px] text-[#39A88E]' />
         <div className='text-[11px] font-[600]'>Settings</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <IoSettings className='mr-[5px] text-[#39A88E] text-[19px]' />
      </div>
       )}

      {readToggle ? (
         <div className='border w-[150px] h-[150px] mt-[20px] rounded-md bg-[white] flex items-center justify-around flex-col'>
         <div>
           <span className='text-[13px] font-[200] text-[#0b1e19]'>Upgrade your account <br />to get free voucher</span>
 
         </div>
         <div className='w-[120px] h-[40px] rounded-[10px] border flex items-center justify-around cursor-pointer text-[15px]'>
          <GiArmorUpgrade className='mr-[5px] text-[#39A88E]' />
          <div className='text-[11px] font-[700]'>UPGRADE</div>
        </div>
        </div>
      ) : (
        <div className='w-[50px] h-[50px] rounded-[50%] shadow-md mt-[90px] flex items-center justify-center cursor-pointer text-[15px] bg-white '>
          <GiArmorUpgrade className='text-[#39A88E] text-[22px]' />
        </div>
      )}


{readToggle ? (
         <div className='w-[70px] h-[40px] rounded-md border-2 border-solid border-[crimson] flex items-center justify-around cursor-pointer text-[15px] mt-[15px]'>
         <div className='text-[11px] font-[600] '>LogOut</div>
       </div>
       ) : (
        <div className='w-[120px] h-[40px] rounded-md flex items-center justify-around cursor-pointer text-[15px]'>
        <IoLogOut className='text-[crimson] text-[29px]  mt-[60px]' />
      </div>
       )}
      </div>
  )
}

export default Sider;