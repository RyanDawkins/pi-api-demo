import { PiApiDemoPage } from './app.po';

describe('pi-api-demo App', () => {
  let page: PiApiDemoPage;

  beforeEach(() => {
    page = new PiApiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
