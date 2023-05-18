import { NavLink, useNavigate } from 'react-router-dom';

const LandingNav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profesori');
  };

  return (
    <header>
      <div>ISEUS</div>
    </header>
  );
};

export default LandingNav;
