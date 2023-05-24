const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
test.describe('Wiki search 2', () => {
  test('test 2', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.wikipedia.org/');
    const element = await page.$('[name="search"]');
    await element.click();
    await element.type('BrowserStack');
    await element.press('Enter');
    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'BrowserStack at Wikipedia', 'Expected page title is incorrect!');
  });
});
