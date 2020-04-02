import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrls: ["my-component.css"],
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div>
        <pichincha-button loading>hola</pichincha-button>
        <pichincha-button color="primary" idelement="idButton" disabled>
          hola
        </pichincha-button>
        <pichincha-spinner
          size={10}
          border={4}
          class="bp-m-20"
        ></pichincha-spinner>
        <pichincha-typography variant="h1" color="blue" align="center">
          {" "}
          holagg
        </pichincha-typography>
      </div>
    );
  }
}
