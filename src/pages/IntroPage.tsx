import { useNavigate } from 'react-router';

import styled from 'styled-components';

const Container = styled.div`
  // 상하 패딩
  padding-block: 10em 25em;
  // 좌우 패딩
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

const Title = styled.h2`
  display: block;
  text-align: center;
  line-height: 120%;
  font-size: 11rem;
  font-weight: bold;
  margin-bottom: 1em;
  color: #FFFFFF;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2.5em;
  width: 49%;
  border: 1px solid transparent;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 4.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    // border색을 사용하여 hover할 때 버튼이 조금 작아진 것처럼 보이게
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }

  img {
    display: block;
    margin-bottom: 1em;
    width: 50%;
  }

  span {
    display: block;
  }
`;

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate('/order');
  };

  return (
    <Container>
      <Title>원하시는 주문을 터치해주세요</Title>
      <Wrapper>
        <Button
          type="button"
          onClick={handleClickNext}
        >
          <img src="/images/fastfood.png" alt="주문 이미지" />
          <span>매장 주문</span>
        </Button>
        <Button
          type="button"
          onClick={handleClickNext}
        >
          <img src="/images/bag.png" alt="포장 이미지" />
          <span>전체 포장</span>
        </Button>
      </Wrapper>
    </Container>
  );
}
