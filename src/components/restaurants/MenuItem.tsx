import styled from 'styled-components';

import Food from '../../types/Food';

const Container = styled.li`
  width: 30%;
`;

const Item = styled.button`
  margin: 0;
  padding: 1em;
  text-align: start;
  border-radius: 2em;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  img {
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  span {
    font-size: 3.2rem;
    display: block;
    padding-block: .2em;
    font-weight: 500;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;

type MenuItemProps = {
  food: Food;
  onClickItem: (food: Food) => void;
};

export default function MenuItem({ food, onClickItem }: MenuItemProps) {
  const { name, price, image } = food;

  return (
    <Container>
      <Item
        type="button"
        onClick={() => onClickItem(food)}
      >
        <img src={image} alt="" />
        <span>
          {name}
          <span>
            {price.toLocaleString()}
            원
          </span>
        </span>
      </Item>
    </Container>
  );
}
