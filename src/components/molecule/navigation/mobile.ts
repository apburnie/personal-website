import { LitElement, html, css } from 'lit'
import { customElement} from 'lit/decorators.js'


@customElement('nav-mobile')
export class NavMobile extends LitElement {

  static styles = css`
		
  `

  render() {
    return html`
    <div>Hello Mobile</div>
          `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nav-mobile': NavMobile 
  }
}
