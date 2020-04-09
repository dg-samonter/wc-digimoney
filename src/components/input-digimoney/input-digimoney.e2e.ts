import { newE2EPage } from '@stencil/core/testing';

describe('input-digimoney', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-digimoney></input-digimoney>');

    const element = await page.find('input-digimoney');
    expect(element).toHaveClass('hydrated');
  });
});
