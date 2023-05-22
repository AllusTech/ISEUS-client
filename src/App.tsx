import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


//page import
//layouts
import LandingLayout from './layouts/Landing/Landing';
import ProfessorsLayout from './layouts/professor/Professors';

//
import ErrorPage from './pages/Error';
import HomePage from './pages/Landing/home/Home';
import AboutUsPage from './pages/Landing/aboutus/AboutUs';
import ContactUsPage from './pages/Landing/contactUs/ContactUs';
import NewsPage from './pages/Landing/news/news';
import BugReportPage from './pages/Landing/bugReports/BugReports';
import Auth from './pages/Landing/Auth/Auth';

import ProfessorsPage from './pages/Professor/Professors/Professors';

type Props = {};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'onama', element: <AboutUsPage /> },
      { path: 'kontakt', element: <ContactUsPage /> },
      { path: 'novosti', element: <NewsPage /> },
      { path: 'prijavagresaka', element: <BugReportPage /> },
      { path: 'prijava', children: [{ index: true, element: <Auth /> }, { path: 'registracija' }] },
    ],
  }, {
    path: 'professors/',
    element: <ProfessorsLayout />,
    children: [
      {index: true, element: <ProfessorsPage/>}
    ]
  },
]);

const App = (props: Props) => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
