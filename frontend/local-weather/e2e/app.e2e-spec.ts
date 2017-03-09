import { RandomQuoteMachinePage } from './app.po';

describe('random-quote-machine App', () => {
  let page: RandomQuoteMachinePage;

  beforeEach(() => {
    page = new RandomQuoteMachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
