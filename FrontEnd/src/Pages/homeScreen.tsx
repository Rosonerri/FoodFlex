import img from "../assets/pexels-cottonbro-studio-6802631.jpg"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import img4 from "../assets/image4.png"
import img5 from "../assets/image8.png"
import img6 from "../assets/image6.png"
import img7 from "../assets/image7.png"
import { GiRoastChicken } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBreadSlice } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import {Link} from "react-router-dom"

const homeScreen = () => {
  return (
  <div className=' w-[75%] h-[100vh] flex flex-col items-center'>
    <div className='border w-[800px] h-[150px] rounded-[15px] bg-[#1d2422] flex justify-center items-center overflow-hidden'>
      <h2 className='text-[white] w-[65%] p-[10px]'>Get Discount Voucher <br /> Up To 20%</h2>
      <div className='text-[white] font-[600]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, <br />laborum? Maxime, iste! Rem, voluptate alias!</div>
      <div className="w-[35%]">
        <img src={img} alt="" className="position-center"/>
      </div>
      
    </div>
    <div className=' w-[800px] h-[150px] rounded-[15px]'>
      <div className='w-[800px] h-[50px] flex justify-between items-center'>
        <h3>Category</h3>
        <div className="flex justify-center items-center">View all
        <FaAngleRight className="ml-[10px]"/>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <GiRoastChicken  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Chicken</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <FaBowlRice className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Rice</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <GiRoastChicken  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Sea Food</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <MdEmojiFoodBeverage  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Beverage</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <FaBurger  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Burger</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <FaBreadSlice  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Bakery</div>
        </div>
        <div className="border w-[110px] h-[90px] rounded-md shadow-md flex justify-between items-center flex-col p-[10px]">
        <FaBreadSlice  className="text-[40px] text-[#cfe0dc]"/>
        <div className="text-[13px] text-[grey]">Bakery</div>
        </div>
      </div>
      <div>
      <div className='w-[800px] h-[50px] flex justify-between items-center'>
        <h3>Category</h3>
        <div className="flex justify-center items-center">View all
        <FaAngleRight className="ml-[10px]"/>
        </div>
      </div>
        <div className="flex justify-between flex-wrap">
        <div className="border h-[250px] w-[250px] rounded-md">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <Link to="/detail">
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img2} alt="" className="w-[100%] h-[100%]"/>
          </div>
          </Link>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>

        <div className="border h-[250px] w-[250px] rounded-md">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img3} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>

        <div className="border h-[250px] w-[250px] rounded-md">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img4} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>
        <div className="border h-[250px] w-[250px] rounded-md mt-[10px]">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img5} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>

        <div className="border h-[250px] w-[250px] rounded-md mt-[10px]">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img6} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>
        <div className="border h-[250px] w-[250px] rounded-md mt-[10px]">
          <div className="flex justify-between items-center w-[100%] p-2 h-[10%] mt-[3px] ">
            <span className="rounded border bg-[#be576c] py-[5px] px-[5px] text-[white] text-[10px] font-[600] flex justify-center items-center">15% off</span>
            <span><FaRegHeart /></span>
          </div>
          <div className="w-[100%] h-[60%] cursor-pointer ">
            <img src={img7} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="w-[100%] h-[25%] ">
          <div className="flex text-[10px] text-[orange] w-[30%] justify-between mb-[6px] mt-[6px] ml-[3px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          <div className="text-[13px] font-[700] ml-[3px]">Tomatoes</div>
          <div className="flex w-[100%] justify-between items-center mt-[]">
            <p className="text-[13px] font-[700] ml-[3px]">$3.22</p>
            <div className="text-[10px] font-[700] border px-1 py-1 text-[black] mr-[5px] cursor-pointer">Add to Cart</div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default homeScreen