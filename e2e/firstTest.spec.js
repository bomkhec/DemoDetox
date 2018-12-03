const { Severity } = require("jest-allure/dist/Reporter");
const { registerAllureReporter } = require("jest-allure/dist/setup");
registerAllureReporter();

describe('Example', () => {
  beforeEach(async () => {
    await device.relaunchApp();

    reporter
        .description("Feature should work cool")
        .feature("Demo")
        .severity(Severity.Critical)
        .story("BOND-007")
        .addEnviroment("OS", "abc");
  });

  it('Hello screen', async () => {
    reporter.startStep("Check it's fancy");
    await expect(element(by.text('Hello'))).toBeVisible();
    reporter.endStep();
  });

  it('should show next screen after tap', async () => {
    await element(by.text('Next 2nd screen')).tap();
    await expect(element(by.text('2nd screen'))).toBeVisible();
  });

  it('should show next screen 3 after tap', async () => {
    await element(by.text('Next 3rd screen')).tap();
    await expect(element(by.text('3rd screen'))).toBeVisible();
  });
})