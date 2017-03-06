import { TributePagePage } from './app.po';

describe('tribute-page App', () => {
  let page: TributePagePage;

  beforeEach(() => {
    page = new TributePagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
