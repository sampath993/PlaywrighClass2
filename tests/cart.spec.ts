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
    })

    test('should display cart with one item', async ({page})=>{
        await page.locator('#checkout').click()
        await expect(page).toHaveURL(/checkout-step-one/)
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information')
    })


})
