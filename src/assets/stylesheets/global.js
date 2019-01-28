import { createGlobalStyle } from 'styled-components'
import { reset } from './base/reset'
import { typography } from './base/typography'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}

  * {
    outline: none;
  }
`
export default GlobalStyle
