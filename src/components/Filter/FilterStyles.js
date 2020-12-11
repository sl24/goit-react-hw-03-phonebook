import styled from 'styled-components';

const FilterInput = styled.input`
  display: block;
  margin: 10px auto;
  padding: 5px;
  font-size: 18px;
  border-radius: 15px;
  outline: none;

  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
`;

export default FilterInput;
