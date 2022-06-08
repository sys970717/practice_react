import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';

interface IProps {
  theme: {
    color: {
      layout: {
        background: string;
      };
    };
  };
}
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default GlobalStyle;
