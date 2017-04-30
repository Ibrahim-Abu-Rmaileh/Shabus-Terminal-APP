import { ShabusTerminalPage } from './app.po';

describe('shabus-terminal App', function() {
  let page: ShabusTerminalPage;

  beforeEach(() => {
    page = new ShabusTerminalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
