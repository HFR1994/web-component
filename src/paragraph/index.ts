/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {LitElement, html, customElement, property, css
} from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-paragraph')
export class MyParagraph extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  myString: string;

  @property()
  myArray: Array<string>;

  @property()
  myBool: boolean;

  @property()
  prop4: string;

  constructor() {
    super();
    this.myString = 'Hello World';
    this.myArray = ['an','array','of','test','data'];
    this.myBool = true;
    this.prop4 = 'pie';
  }

  static get styles() {
    return css`
    :host {
      font-family: Roboto;
      color: red;
    }
  `
  }

  render() {
    return html`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
      <div>
        property binding
        <input type="text" .value="${this.prop4}"/>
      </div>
      <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>
      
      <!-- render outside children -->
      <div>
        <slot></slot>
      </div>
    `;
  }

  clickHandler(e: Event) {
    console.log(e.target);
  }
}
