import * as styled from 'styled-components';
import reset from 'styled-reset';

export default styled.createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Spoqa Han Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
