import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Summary from './Summary';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';

import useCartStore from '../../hooks/useCartStore';
import useCreateOrder from '../../hooks/useCreateOrder';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.tertiary};

  ul {
    display: grid;
    // 그리드 컨테이너의 열 크기
    grid-template-columns: 1fr 1fr 1fr;
    // 그리드 레이아웃의 열과 행 간격
    gap: 1.5em;
    // 그리드 컨테이너의 위아래 마진
    margin-block: 2em;
  }
`;

export default function Cart() {
  const navigate = useNavigate();

  const [{ menu }, store] = useCartStore();

  const { createOrder } = useCreateOrder();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clear();

    navigate('/');
  };

  const handleClickOrder = async () => {
    if (!menu.length) {
      return;
    }

    const id = await createOrder(menu);

    store.clear();

    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <Container>
      <Summary selectedMenu={menu} />
      <ul>
        {menu.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancel={handleClickRemove}
            />
          );
        })}
      </ul>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </Container>
  );
}
