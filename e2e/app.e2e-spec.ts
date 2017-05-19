import { YouplayPage } from './app.po';

describe('youplay App', function() {
  let page: YouplayPage;

  beforeEach(() => {
    page = new YouplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
