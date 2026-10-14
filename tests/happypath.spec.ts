import{ test, expect} from '@playwright/test'

test.describe('Login Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://www.saucedemo.com/')
    })

    // Happy Path Tests

    test('should login successfully with standard_user', async({page})=>{

        await page.locator('#user-name').fill('standard_user')
        await page.locator('#password').fill('secret_sauce')
        await page.locator('#login-button').click()

    })

     test('should login successfully with problem_user', async({page})=>{

        await page.locator('#user-name').fill('problem_user')
        await page.locator('#password').fill('secret_sauce')
        await page.locator('#login-button').click()

    })

})