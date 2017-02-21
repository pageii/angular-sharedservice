import { TestSubjectPage } from './app.po';

describe('test-subject App', function() {
  let page: TestSubjectPage;

  beforeEach(() => {
    page = new TestSubjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
