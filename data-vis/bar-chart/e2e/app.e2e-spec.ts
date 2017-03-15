import { BarChartPage } from './app.po';

describe('bar-chart App', () => {
  let page: BarChartPage;

  beforeEach(() => {
    page = new BarChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
