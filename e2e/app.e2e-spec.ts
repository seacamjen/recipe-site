import { RecipeSitePage } from './app.po';

describe('recipe-site App', () => {
  let page: RecipeSitePage;

  beforeEach(() => {
    page = new RecipeSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
