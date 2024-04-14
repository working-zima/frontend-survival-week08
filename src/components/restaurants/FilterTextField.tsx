import styled from 'styled-components';
import TextField from '../TextField';

const Container = styled.div`
  padding-block: 1em 2em;

  label {
    // 라벨 텍스트 보이지 않게
    display: none;
  }

  input {
    font-size: 3.2rem;
    padding: .5em;
    width: 100%;
    border-radius: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.textFieldBorder};
    // background-image, background-repeat, background-position, background-size
    background: url("/images/icon-search.png") no-repeat 98% 50% / 4rem;
    color: #FFFFFF;
  }

  input::placeholder {
    color: #FFFFFF;
  }
`;

type FilterTextFieldProps = {
  text: string;
  setText: (value: string) => void;
};

export default function FilterTextField({
  text, setText,
}: FilterTextFieldProps) {
  return (
    <Container>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        text={text}
        setText={setText}
      />
    </Container>

  );
}
