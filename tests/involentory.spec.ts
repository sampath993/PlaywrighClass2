import { test, expect } from '@playwright/test'

test.describe('Inventory Page', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')

        await page.locator('#user-name').fill('standard_user')

        await page.locator('#password').fill('secret_sauce')

        await page.locator('#login-button').click()

        await page.waitForURL('**/inventory.html')

        await expect(page).toHaveURL(/inventory/)

    })

 

    test('should display all products', async ({ page }) => {

        const products = page.locator('.inventory_item')

        await expect(products).toHaveCount(6)

        const firstProduct = products.nth(0)

        await expect(firstProduct.locator('.inventory_item_name ')).toHaveText('Sauce Labs Backpack')

        await expect(firstProduct.locator('.inventory_item_price ')).toHaveText('$29.99')

    })

    test('should add product to cart', async ({ page }) => {

        const addButton = page.locator('#add-to-cart-sauce-labs-backpack')

        await addButton.click()

        const cartBadge = page.locator('.shopping_cart_badge')

        await expect(cartBadge).toHaveText('1')

        const remove = page.locator('#remove-sauce-labs-backpack')

        await expect(remove).toHaveText('Remove')

    })

 

   test('should sort products by name Z to A', async ({ page }) => {

        await page.locator('.product_sort_container').selectOption('za')

        const productNames = await page.locator('.inventory_item_name ').allTextContents()

        console.log(productNames)

   })

})