const timeout = 5000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://www.saucedemo.com');
    }, timeout);

    it('doit être chargé sans erreur', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('sauce');
    });
  },
  timeout,
);