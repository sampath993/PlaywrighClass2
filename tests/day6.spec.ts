import {test, expect} from  '@playwright/test';

test('testautomationPracticePage',async({page})=>{
await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightPracticePage.html')

await page.getByPlaceholder("Username").fill("sampath")
await page.getByPlaceholder("Password").fill("Test")

await page.locator('[id="java"]').check()

    await page.locator('#playwright').check()

    await page.locator('[value="male"]').check()

    await page.getByText("female").check()

    await page.locator('#country').selectOption("UK")

    await page.getByRole('button', { name: "Save" }).click()

    await page.locator('#doubleBtn').dblclick()

    await page.locator('#rightBtn').click({button:'right'})


})

test('Handling Alert Test', async ({ page }) => {
   await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightPracticePage.html')

  page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');

        expect(dialog.message()).toBe('Simple Alert');
        await dialog.accept();
    });
    await page.getByRole("button",{name:"Alert"}).click()
})


test('Handling Confirm Alert Test', async ({ page }) => {
    await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightPracticePage.html')

  page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');

        expect(dialog.message()).toBe('Confirm Box');
        await dialog.accept();
    });
await page.getByRole("button",{name:"Confirm"}).click()
})


test('Handling promt', async ({ page }) => {
    await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightPracticePage.html')

  page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');

        expect(dialog.message()).toBe('Enter Name');
    //    await page.locator
        await dialog.accept('Test');
    });
await page.getByRole("button",{name:"Prompt"}).click()
})

test('Dag and drop', async({page})=>{

await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightPracticePage.html')

 //const sourceElement =  page.locator('[id="java"]').check()
 const sourceElement =  page.locator('[id='dragItem']')
  const targetElement = page.locator('#dropzone');

  // Perform drag and drop
  await sourceElement.dragTo(targetElement);

  // Assert the drop was successful
  await expect(targetElement).toHaveText('Dropped!');


})
