import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    setTheme('light');
  };

  return (
    <nav className="flex items-center justify-between h-24 px-5 bg-white shadow-lg select-none font-nunito dark:bg-dark-blue text-very-dark-blue-text dark:text-white">
      <Link href="/">
        <a>
          <h1 className="font-extrabold cursor-pointer md:text-xl">
            Where in the world?
          </h1>
        </a>
      </Link>
      <div className="flex font-semibold cursor-pointer" onClick={themeHandler}>
        {theme === 'dark' ? (
          <MoonIcon className="w-6 h-6 mr-2" />
        ) : (
          <SunIcon className="w-6 h-6 mr-2" />
        )}
        <span className="capitalize">{theme} Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
