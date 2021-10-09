import { ReactNode } from 'react';

interface Props {
  keyTitle: string;
  number?: boolean;
  children: ReactNode;
}

const DetailData = ({ keyTitle, children, number }: Props) => {
  return (
    <p className="flex flex-wrap">
      <span className="mr-2 font-semibold">{keyTitle}: </span>
      {number ? new Intl.NumberFormat('en-US').format(+children) : children}
    </p>
  );
};

export default DetailData;
