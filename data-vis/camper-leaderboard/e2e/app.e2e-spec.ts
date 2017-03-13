import { CamperLeaderboardPage } from './app.po';

describe('camper-leaderboard App', () => {
  let page: CamperLeaderboardPage;

  beforeEach(() => {
    page = new CamperLeaderboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
