import { CoolAngularPage } from './app.po';

describe('cool-angular App', () => {
  let page: CoolAngularPage;

  beforeEach(() => {
    page = new CoolAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
