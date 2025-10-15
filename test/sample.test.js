import * as allure from "allure-js-commons";
import { test, expect } from "@playwright/test";

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
  await test.step('Navigate to page', async () => {
    await page.goto('https://playwright.dev');
  });
  
  await test.step('Check wrong title', async () => {
    // Намеренная ошибка: проверяем неправильный заголовок
    await expect(page).toHaveTitle('This should break the test');
  });
});
