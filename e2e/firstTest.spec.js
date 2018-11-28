describe('Example', () => {
  beforeEach(async () => {
    await device.relaunchApp();
  });

  it('Hello screen', async () => {
    await expect(element(by.text('Hello'))).toBeVisible();
  });

  it('should show next screen after tap', async () => {
    await element(by.text('Next 2nd screen')).tap();
    await expect(element(by.text('2nd screen'))).toBeVisible();
  });

  it('should show next screen after tap', async () => {
    await element(by.text('Next 3rd screen')).tap();
    await expect(element(by.text('3rd screen'))).toBeVisible();
  });
})