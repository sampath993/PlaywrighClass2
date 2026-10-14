import{ test, expect} from '@playwright/test'

test.describe('Login Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://www.saucedemo.com/')
    })

    // Edge Case : locked_out_user

    test('should show error for locked_out_user', async({page})=>{

        await page.locator('#user-name').fill('locked_out_user')
        await page.locator('#password').fill('secret_sauce')
        await page.locator('#login-button').click()

        // should stay on login page
        await expect(page).toHaveURL('https://www.saucedemo.com/')

        // Error message should appear

        const errorMessage = page.locator('[data-test="error"]')
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')

    })

    // Edge Case : Empty Fields

    test('should show error when both fields are empty', async({page})=>{

        await page.locator('#login-button').click()

        // should stay on login page
        await expect(page).toHaveURL('https://www.saucedemo.com/')

        // Error message should appear

        const errorMessage = page.locator('[data-test="error"]')
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Epic sadface: Username is required')

    })

    // Edge Case : when Password is Empty
    // Edge Case : for invalid username
    // Edge Case : Special Characters
    // Edge Case : handle extremely long inputs
    // Edge Case : WhiteSpace / Leading/Trailing Spaces
    // Edge Case : CASE Sensitivity

    // const longstring = "a".repeat(10000)
    // await page.locator('#user-name').fill(longstring)

    

})