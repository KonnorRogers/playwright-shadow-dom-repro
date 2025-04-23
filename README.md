# Purpose

Bug reproduction from here:

<https://discord.com/channels/739437527907303535/1364593077435760701/1364593077435760701>

`page.getByLabel("Checkbox")` not working on shadow dom checkbox.

## Running the tests

```bash
git clone https://github.com/KonnorRogers/playwright-shadow-dom-repro.git
cd playwright-shadow-dom-repro
npm install
npm run test
```

1 test is expected to fail.
3 tests are expected to pass.

```
➜  playwright-checkbox git:(main) ✗ npm run test

> playwright-checkbox@1.0.0 test
> playwright test


Running 4 tests using 4 workers
···F

  1) [chromium] › tests/example.spec.js:4:5 › getByLabel on slotted content ────────────────────────

    Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

    Locator: getByLabel('Checkbox With Slotted Content')
    Expected: visible
    Received: <element(s) not found>
    Call log:
      - expect.toBeVisible with timeout 5000ms
      - waiting for getByLabel('Checkbox With Slotted Content')


       6 |
       7 |   // This fails because content comes from a <slot>
    >  8 |   await expect(page.getByLabel("Checkbox With Slotted Content")).toBeVisible();
         |                                                                  ^
       9 | });
      10 |
      11 | test('getByLabel on shadow root content', async ({ page }) => {
        at /Users/konnor/projects/playwright-checkbox/tests/example.spec.js:8:66

    Error Context: test-results/example-getByLabel-on-slotted-content-chromium/error-context.md

  1 failed
    [chromium] › tests/example.spec.js:4:5 › getByLabel on slotted content ─────────────────────────
  3 passed (6.6s)
```
