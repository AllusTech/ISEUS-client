import { Outlet } from 'react-router-dom';

import Nav from './comp/Nav';
import Footer from './comp/Footer'

type Props = {};

const Landing: React.FC = (props: Props) => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Landing;
