import { SearchIcon } from '@heroicons/react/outline';

interface Props {
  searchValue?: string;
  setData: (input: string) => void;
}

const Search = ({ setData, searchValue }: Props) => {
  return (
    <div className="md:max-w-[350px] lg:max-w-[450px] md:mt-8 mb-4 w-full">
      <div className="flex h-12 px-6 space-x-4 bg-white rounded-md dark:bg-dark-blue dark:text-white text-dark-gray shadow-average">
        <SearchIcon className="w-5" />
        <input
          type="text"
          className="flex-1 w-full text-sm bg-transparent focus:outline-none"
          placeholder="Search for a country"
          onChange={(e) => setData(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default Search;
