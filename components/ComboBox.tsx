import { ChevronDownIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import SelectItem from './ComboBoxItem';

interface Props {
  setRegion: (region: string) => void;
  region?: string;
}

const ComboBox = ({ setRegion, region }: Props) => {
  const [click, setClick] = useState<boolean>(false);

  const clickHandler = (region: string) => {
    setClick(!click);
    setRegion(region);
  };

  return (
    <div
      className="relative md:mx-0 md:max-w-[350px] lg:max-w-[450px] md:mt-8 mb-14 h-12 shadow-average rounded-md bg-white dark:bg-dark-blue px-6 cursor-pointer"
      onClick={() => setClick(!click)}
    >
      <button className="flex items-center justify-between w-40 h-full">
        <span>{region ? region : 'Filter by Region'}</span>
        <ChevronDownIcon
          className={`h-5 transition-all ${click && 'transform -rotate-180'}`}
        />
      </button>
      <div
        className={`absolute left-0 z-10 top-14 transform -translate-y-10 transition-all ${
          click ? 'opacity-100 translate-y-0' : 'opacity-0'
        }`}
      >
        <ul
          role="listbox"
          className="flex flex-col h-40 px-6 bg-white rounded-md shadow-average justify-evenly w-52 dark:bg-dark-blue"
        >
          <SelectItem setRegion={clickHandler} region="Africa" />
          <SelectItem setRegion={clickHandler} region="Americas" />
          <SelectItem setRegion={clickHandler} region="Asia" />
          <SelectItem setRegion={clickHandler} region="Europe" />
          <SelectItem setRegion={clickHandler} region="Oceania" />
        </ul>
      </div>
    </div>
  );
};

export default ComboBox;
