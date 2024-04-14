import styled from 'styled-components';
import Switch from './Switch';

const Container = styled.div`
  display: flex;
  // Title과 Switch를 양 끝으로
  justify-content: space-between;
  padding-block: 5rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
`;

const Title = styled.div`
  display: flex;

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    padding-inline: .3em;
    color: white;
    line-height: 150%;
  }

  img {
    display: block;
    width: 68px;
    height: 60px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>
        <img src="/images/logo.png" alt="logo" />
        <h1>메가테라 푸드코트 키오스크</h1>
      </Title>
      <Switch />
    </Container>
  );
}
