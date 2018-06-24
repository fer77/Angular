import { HttpServicesPage } from './app.po';

describe('http-services App', () => {
  let page: HttpServicesPage;

  beforeEach(() => {
    page = new HttpServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
