import {SearchOutlined, BellOutlined, ShoppingCartOutlined, LoginOutlined  } from "@ant-design/icons"

const Navbar = () => {
  return (
    <div className="px-40">
         <div className="p-8 flex align-center border-b border-[#46A358] ">
     <div className="flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa" alt="logo" />
     </div>
     <div className='flex-1 flex justify-center gap-8 max-sm:hidden'>
        <h3 className="cursor-pointer  font-Inter">Home</h3>
        <h3>Blog</h3>
     </div>
     <div className="flex-1 justify-end flex gap-8 max-sm:hidden">
       <span className="text-[20px]"> <SearchOutlined/></span>
        <span className="text-[20px]"><BellOutlined/></span>
       <span className="text-[20px]"><ShoppingCartOutlined/></span> 
        <button className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"> <LoginOutlined/>Login</button>
     </div>



    </div>
    </div>
   
  )
}

export default Navbar