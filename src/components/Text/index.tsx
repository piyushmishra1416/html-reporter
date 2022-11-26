import styled from 'styled-components';

interface TextProps {
  fontSize: string;
  lineHight: string;
  color?: string;
}

export const Text = styled.p<TextProps>`
  font-weight: var(--font-weight-semi-light);
  font-size: var(${(props) => props.fontSize});
  line-height: var(${(props) => props.lineHight});
  color: ${(props) => (props.color ? props.color : `var(--color-grey-90)`)};
`;
