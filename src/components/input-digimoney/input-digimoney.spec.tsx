import { newSpecPage } from '@stencil/core/testing';
import { InputDigimoney } from './input-digimoney';

describe('input-digimoney', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputDigimoney],
      html: `<input-digimoney></input-digimoney>`,
    });
    expect(page.root).toEqualHtml(`
      <input-digimoney>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-digimoney>
    `);
  });
});
