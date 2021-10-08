import { MoonIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-24 px-5 shadow-lg font-nunito font-bg-blue-400">
      <h1 className="font-extrabold md:text-xl ">Where in the world?</h1>
      <div className="flex font-semibold">
        <MoonIcon className="w-6 h-6 mr-2" />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
