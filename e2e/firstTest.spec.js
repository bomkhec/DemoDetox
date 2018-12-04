const { Severity } = require("jest-allure/dist/Reporter");
const { registerAllureReporter } = require("jest-allure/dist/setup");
registerAllureReporter();

describe('Example', () => {
  beforeEach(async () => {
    await device.relaunchApp();
  });

  it('Hello screen', async () => {
    reporter.story("Test Hello screen");
    reporter.feature("Test Display label");
    reporter.description("Only test Hello screen");
    reporter.startStep("test visible hello label");
    await expect(element(by.text('Hello'))).toBeVisible();
    // await device.takeScreenshot('after_test');       
    // const screenshot = await device.takeScreenshot("uuuui980889990", "temp/");
    // reporter.addAttachment("Home Page", screenshot, "image/png");
    reporter.endStep();
  });

  it('should show next screen after tap', async () => {
    reporter.story("Test navigate to 2nd screen");
    reporter.feature("Test Display 2nd screen");
    reporter.description("Only test navigate to next screen");
    await element(by.text('Next 2nd screen')).tap();
    await expect(element(by.text('2nd screen'))).toBeVisible();
  });

  it('should show next screen 3 after tap', async () => {
    reporter.story("Test navigate to 3rd screen");
    reporter.feature("Test Display 3rd screen");
    reporter.description("Only test navigate to 3rd screen");
    await element(by.text('Next 3rd screen')).tap();
    await expect(element(by.text('3rd screen'))).toBeVisible();
  });
})