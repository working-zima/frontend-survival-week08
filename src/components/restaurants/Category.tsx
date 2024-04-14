import styled, { css } from 'styled-components';

const Container = styled.li`
  width: 25%;
`;

type ButtonProps = {
  active: boolean;
};

const Button = styled.button<ButtonProps>`
  font-size: 4rem;
  padding-block: .5em;
  width: 100%;
  border: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: transparent;
  // 모드에 따라 색이 바뀌지 않기 때문에 theme 사용하지 않음
  color: white;
  cursor: pointer;

  ${(props) => props.active && css`
    color: #FF8400;
    background: ${props.theme.colors.secondary};
    transition: .3s;
  `}
`;

type CategoryProps = {
  active: boolean;
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function Category({
  active, category, setFilterCategory,
}: CategoryProps) {
  return (
    <Container>
      <Button
        type="button"
        active={active}
        onClick={() => setFilterCategory(category)}
      >
        {category}
      </Button>
    </Container>
  );
}
