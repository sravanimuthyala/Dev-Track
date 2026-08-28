import Image from "../assets/image.png";
const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-between h-16 shadow-md w-full ">
        <img width={160} src={Image} />
        <div className="mr-4 flex items-center gap-5">
          <button className="hover:bg-cyan-200 hover:cursor-pointer bg-cyan-600 text-white p-2 rounded-md">light mode</button>
          <button className="hover:bg-cyan-200 hover:cursor-pointer  bg-cyan-600 text-white p-2 rounded-md">sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
