import { FedererSitePage } from './app.po';

describe('federer-site App', () => {
  let page: FedererSitePage;

  beforeEach(() => {
    page = new FedererSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
