import { newE2EPage } from '@stencil/core/testing';

describe('table-digimoney', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<table-digimoney></table-digimoney>');

    const element = await page.find('table-digimoney');
    expect(element).toHaveClass('hydrated');
  });
});
