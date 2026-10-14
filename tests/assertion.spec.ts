import { test, expect } from '@playwright/test'

test('should display success message on login', async ({ page }) => {

    await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

    await page.locator('#login-btn').click()

    await expect(page.locator('#login-msg')).toBeVisible()

    await expect(page.locator('#login-msg')).toHaveText('User Login Successful')

    await expect(page.locator('#login-msg')).toHaveClass('success')

    await expect(page.locator('#login-msg')).toHaveClass(/success/)
})


test.describe('Dynamic Button Tests', () => {

    test('should be disbled initially', async ({ page }) => {

        await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

        await expect(page.locator('#dynamic-btn')).toBeDisabled()

    })

    test('should become enabled after 2 seconds', async ({ page }) => {

        await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

        await page.getByRole('button', { name: 'Enable Button' }).click()
        await expect(page.locator('#dynamic-btn')).toBeEnabled()

    })

})

test.describe('Error Toggle Tests', () => {

    test('should hide error message initially', async ({ page }) => {

        await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

        await expect(page.locator('#error')).toHaveClass(/hidden/)

    })


    test('should toggle error message visibility', async ({ page }) => {

        await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

        await page.getByRole('button', { name: 'Trigger Error' }).click()
        await expect(page.locator('#error')).not.toHaveClass(/hidden/)

        await page.getByRole('button', { name: 'Trigger Error' }).click()
        await expect(page.locator('#error')).toHaveClass(/hidden/)


    })


    test.describe('Table Tests', () => {

        test('should verify table row count', async ({ page }) => {

            await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

            const rows = page.locator('#users tr')
            await expect(rows).toHaveCount(3)

        })

        test('should verify table content', async ({ page }) => {

            await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')

            await expect(page.locator('#users tr:nth-child(1) td:nth-child(1)')).toHaveText('Hassain')
            await expect(page.locator('#users tr:nth-child(1) td:nth-child(2)')).toHaveText('Admin')

            const editButtons = page.locator('.edit')
            await expect(editButtons).toHaveCount(3)

        })

        test('should handle strict mode with multiple elements', async ({ page }) => {

            await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')
            await page.locator('#users tr:nth-child(2) .edit').click()
//            await page.locator('#users .edit').click()

        })

    })
    test('',async ({page})=>{
        await page.goto('file:///C:/Users/P%20SampathKumar/OneDrive/Desktop/PlaywrightAssertionsLab.html')


    })



})



