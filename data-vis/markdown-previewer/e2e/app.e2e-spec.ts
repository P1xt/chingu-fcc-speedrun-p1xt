import { MarkdownPreviewerPage } from './app.po';

describe('markdown-previewer App', () => {
  let page: MarkdownPreviewerPage;

  beforeEach(() => {
    page = new MarkdownPreviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
