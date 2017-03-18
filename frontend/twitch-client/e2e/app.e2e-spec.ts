import { WikipediaViewerPage } from './app.po';

describe('wikipedia-viewer App', () => {
  let page: WikipediaViewerPage;

  beforeEach(() => {
    page = new WikipediaViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
