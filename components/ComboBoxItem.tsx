interface Props {
  setRegion: (region: string) => void;
  region?: string;
}

const ComboBoxItem = ({ setRegion, region }: Props) => {
  return (
    <li role="option" className="w-full cursor-pointer select-none">
      <button onClick={() => setRegion(region)}>
        <span>{region}</span>
      </button>
    </li>
  );
};

export default ComboBoxItem;
