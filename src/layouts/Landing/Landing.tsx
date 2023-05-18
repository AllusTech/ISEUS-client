import { Outlet } from 'react-router-dom';

import Nav from './comp/Nav';

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Landing;
