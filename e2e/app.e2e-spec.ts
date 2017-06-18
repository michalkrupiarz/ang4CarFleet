import { Ang4CarFleetPage } from './app.po';

describe('ang4-car-fleet App', () => {
  let page: Ang4CarFleetPage;

  beforeEach(() => {
    page = new Ang4CarFleetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
