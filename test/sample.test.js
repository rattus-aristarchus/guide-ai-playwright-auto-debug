import * as allure from "allure-js-commons";
import { test, expect } from "../coverage-lib/fixture.js";

test("sample test", async () => {
  await allure.links(...[{ url: "https://example.org"}]);
  await allure.owner("John Doe");
  await allure.issue("JIRA-2", "https://example.org");
  await allure.step("step 1", async () => {
    await allure.step("step 1.2", async () => {
      await allure.attachment("text attachment", "some data", "text/plain");
    });
  });
  await allure.step("step 2", async () => {
  });
});

test("always fails", async ({ page }) => {
  await allure.links(...[{ url: "https://example.org"}]);
  await allure.owner("John Doe");

  await page.goto('https://the-internet.herokuapp.com');
  await allure.step("fail on purpose", async () => {
    await expect(page).toHaveURL(/forsureisntthere/);
  });
});
