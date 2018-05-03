import { injectGlobal } from 'styled-components';

export default function injectGlobalStyle() {
  return injectGlobal`
    *{
     box-sizing: border-box;
    }
   html, body, .root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
   }
  `;
}
