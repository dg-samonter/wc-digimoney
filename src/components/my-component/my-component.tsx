import { Component, Prop, h } from '@stencil/core';
import 'design-pichincha'
import 'design-pichincha/dist/collection/global/spaces.css'
import 'design-pichincha/dist/collection/global/variables.css'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
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
    return <div>
    
    <pichincha-button loading >hola</pichincha-button>
    <pichincha-button  color='primary' idelement='idButton' disabled>hola</pichincha-button>
    <pichincha-spinner size={10} border={4} class='bp-m-20' ></pichincha-spinner>
    <pichincha-typography variant='h1' color='blue' align='center'> holagg</pichincha-typography>
  
    </div>;
  }
}
