import { TruncateTweetPipe } from './truncate-tweet.pipe';

describe('TruncateTweetPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateTweetPipe();
    expect(pipe).toBeTruthy();
  });
});
