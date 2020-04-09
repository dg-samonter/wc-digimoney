import {
  Component,
  ComponentInterface,
  Event,
  h,
  Prop,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "input-digimoney",
  styleUrl: "input-digimoney.css",
  shadow: true,
  assetsDirs: ['assets']
})
export class InputDigimoney implements ComponentInterface {
  @Prop() placeholder: string = "";
  @Prop() value: string = "";
  @Prop() disabled: boolean = false;
  @Prop() status: number = 0;
  @Event() public changeInput: EventEmitter;

  public event(e: any) {
    console.log(e)
    this.changeInput.emit(e);
  }

  render() {
    return (
      <div style={{position:'relative'}}  class={
        this.status == 1 ? "errorIcon" : this.status == 2 ? "successIcon" : ""
      }>
        <input
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          onInput={(e) => this.event(e)}
          class={
            this.status == 1 ? "errorInput" : ""
          }
        />
      </div>
    );
  }
}
