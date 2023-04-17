import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  background-image: grey;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Layout = () => {
  return (
    <>
      <AppBar />
      <Wrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
