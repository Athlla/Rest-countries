import { ReactNode } from 'react';

import Navbar from 'components/Navbar';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='text-sm p-7'>{children}</main>
    </>
  );
};

export default Layout;
