const { Severity } = require("jest-allure/dist/Reporter");
const { registerAllureReporter } = require("jest-allure/dist/setup");
registerAllureReporter();
// const { takeScreenshot } = require ('./helpers');
// const { screenshot } = require ('./screenshot');

const { exec } = require('child-process-async');

// Read file
const fs = require('fs')
const readFile = (path) =>
    new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })

//Take screenshot
const screenshot = async(name) => {
  await exec(
    `xcrun simctl io booted screenshot artifacts/${name}`
  );
  const res = await readFile("artifacts/"+name);
  reporter.addAttachment(name, res, 'image/png');
};

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
    await screenshot("step1.png");
  });

  it('should show next screen after tap', async () => {
    reporter.story("Test navigate to 2nd screen");
    reporter.feature("Test Display 2nd screen");
    reporter.description("Only test navigate to next screen");
    reporter.startStep("Test visible 2nd screen label");
    await element(by.text('Next 2nd screen')).tap();
    await expect(element(by.text('2nd screen'))).toBeVisible();
    await screenshot("step2.png");
  });

  it('should show next screen 3 after tap', async () => {
    reporter.story("Test navigate to 3rd screen");
    reporter.feature("Test Display 3rd screen");
    reporter.description("Only test navigate to 3rd screen");
    reporter.startStep("Test visible 3rd screen label");
    await element(by.text('Next 3rd screen')).tap();
    await expect(element(by.text('3rd screen'))).toBeVisible();
    await screenshot("step3.png");
  });
})
