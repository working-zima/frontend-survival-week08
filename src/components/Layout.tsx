import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
// 위아래 여백 없고, 좌우 여백은 균등하게 분배
  margin: 0 auto;
  width: ${(props) => props.theme.sizes.layoutWidth};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
