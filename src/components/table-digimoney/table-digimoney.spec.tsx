import { newSpecPage } from '@stencil/core/testing';
import { TableDigimoney } from './table-digimoney';

describe('table-digimoney', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TableDigimoney],
      html: `<table-digimoney></table-digimoney>`,
    });
    expect(page.root).toEqualHtml(`
      <table-digimoney>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </table-digimoney>
    `);
  });
});
