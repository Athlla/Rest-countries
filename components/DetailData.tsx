import { ReactNode } from 'react';

interface Props {
  keyTitle: string;
  children: ReactNode;
}

const DetailData = ({ keyTitle, children }: Props) => {
  return (
    <p className="flex flex-wrap">
      <span className="mr-2 font-semibold">{keyTitle}: </span>
      {children}
    </p>
  );
};

export default DetailData;
