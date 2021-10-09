interface Props {
  setRegion: (region: string) => void;
  region?: string;
}

const ComboBox = ({ setRegion, region }: Props) => {
  return (
    <div className="md:mx-0 md:max-w-[350px] lg:max-w-[450px] md:mt-8 mb-14 h-12 shadow-average rounded-md overflow-hidden">
      <select
        className="h-full pl-4 pr-8 focus:outline-none"
        onChange={(e) => setRegion(e.target.value)}
        value={region}
      >
        <option className="hidden">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default ComboBox;
