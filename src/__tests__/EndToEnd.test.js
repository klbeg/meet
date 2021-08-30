import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  let turnOnHeadless = {
    headless: false,
    slowMo: 150,
    ignoreDefaultArgs: ['--disable-extensions'],
  };
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('an event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event_Details');
    expect(eventDetails).toBeNull();
  });

  test("user can expand an event to see it's details", async () => {
    await page.click('.event .show-details');
    const eventDetails = await page.$('.event .event_Details');
    expect(eventDetails).toBeDefined();
  });

  test('user can collapse event details', async () => {
    await page.click('.event .hide-details');
    const eventDetails = await page.$('.event .event_Details');
    expect(eventDetails).toBeNull();
  });
});
