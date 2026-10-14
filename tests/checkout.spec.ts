import { test, expect } from '@playwright/test'

test.describe('Inventory Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('#user-name').fill('standard_user')
        await page.locator('#password').fill('secret_sauce')
        await page.locator('#login-button').click()
        await page.waitForURL('**/inventory.html')
        await expect(page).toHaveURL(/inventory/)
        const products = page.locator('.inventory_item')
        await expect(products).toHaveCount(6)

        const firstProduct = products.nth(0)
        await expect(firstProduct.locator('.inventory_item_name ')).toHaveText('Sauce Labs Backpack')
        await expect(firstProduct.locator('.inventory_item_price ')).toHaveText('$29.99')

        await page.locator('#add-to-cart-sauce-labs-backpack').click()
        await page.locator('.shopping_cart_link').click()

        await page.locator('#checkout').click()
        await expect(page).toHaveURL(/checkout-step-one/)
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information')

    })

    test('should allow the user to fill the user information', async ({page})=>{

        await page.locator('#first-name').fill('Hassain')
        await page.locator('#last-name').fill('Basha')
        await page.locator('#postal-code').fill('600028')
        await page.locator('#continue').click()

        await expect(page).toHaveURL(/checkout-step-two/)
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview')

        await page.locator('#finish').click()
        await expect(page).toHaveURL(/checkout-complete/)
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!')

        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')

        

    })


})


