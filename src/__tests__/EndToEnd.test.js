import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  let turnOffHeadless = {
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

describe('Filter events by city', () => {
  let browser;
  let page;
  let turnOffHeadless = {
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

  //  this test can be improved to check for location of events
  test("When a user hasn't searched for a city, show upcoming events from all cities", async () => {
    const cityInput = await page.waitForSelector('.city');
    const eventListLength = await page.$$eval(
      '.event',
      (element) => element.length
    );
    expect(cityInput.value).toBe(undefined);
    expect(eventListLength).toBe(32);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestionsListLength = await page.$$eval(
      '.suggestions li',
      (element) => element.length
    );
    expect(suggestionsListLength).toBe(2);
  });

  test('User can select a city from the suggestes list', async () => {
    await page.click('.suggestions li');
    const cityInputValue = await page.$eval('.city', (input) =>
      input.getAttribute('value')
    );
    expect(cityInputValue).toBe('Berlin, Germany');
  });
});
