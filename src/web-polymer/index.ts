/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {LitElement, html, customElement, css} from 'lit-element';
import '../paragraph/index'


@customElement('web-polymer')
export class MyOtherElement extends LitElement {

  static get styles() {
    return css`
    #first {
      font-family: Roboto;
      color: blue;
    }
  `
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
    <my-paragraph id="first" myString="Aqui estoy">
      <p>Render Me</p>
    </my-paragraph>
    
    <div>--------------</div>
    
    <my-paragraph/>
    `;
  }
}
