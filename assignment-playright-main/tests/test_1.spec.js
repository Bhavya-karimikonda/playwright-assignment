const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
test.describe('Wiki search 1', () => {
  test('test 1', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.wikipedia.org/');
    const element = await page.$('[name="search"]');
    await element.click();
    await element.type('BrowserStack');
    await element.press('Enter');
    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'BrowserStack - Wikipedia', 'Expected page title is incorrect!');
  });
});
