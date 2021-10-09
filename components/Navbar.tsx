import { MoonIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-24 px-5 shadow-lg select-none font-nunito'>
      <h1 className='font-extrabold cursor-pointer md:text-xl'>
        Where in the world?
      </h1>
      <div className='flex font-semibold cursor-pointer'>
        <MoonIcon className='w-6 h-6 mr-2' />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
