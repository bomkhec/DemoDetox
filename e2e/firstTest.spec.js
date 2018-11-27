describe('Example', () => {
  beforeEach(async () => {
    await device.relaunchApp();
  });

  it('Hello screen', async () => {
    await expect(element(by.text('Hello'))).toBeVisible();
  });

  it('should show next screen after tap', async () => {
    await element(by.text('Next')).tap();
    await expect(element(by.text('Next screen'))).toBeVisible();
  });
  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})