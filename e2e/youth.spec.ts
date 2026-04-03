import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Bright Futures/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const programsLink = page.getByRole('navigation').getByRole('link', { name: 'Programs' }).first()
    await expect(programsLink).toBeVisible()
    await programsLink.click()
    await expect(page).toHaveURL('/programs')
  })
})

test.describe('Programs Page', () => {
  test('displays programs from Drupal', async ({ page }) => {
    await page.goto('/programs')
    await expect(page).toHaveTitle(/Programs/)
    await expect(page.getByText('STEM Explorers').first()).toBeVisible()
  })
})

test.describe('Mentors Page', () => {
  test('displays mentors from Drupal', async ({ page }) => {
    await page.goto('/mentors')
    await expect(page).toHaveTitle(/Mentors/)
    await expect(page.getByText('Marcus Williams').first()).toBeVisible()
  })
})

test.describe('Events Page', () => {
  test('displays events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page).toHaveTitle(/Events/)
    await expect(page.getByText('Annual Bright Futures Gala', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Success Stories Page', () => {
  test('displays success stories from Drupal', async ({ page }) => {
    await page.goto('/success-stories')
    await expect(page).toHaveTitle(/Success Stories/)
    await expect(page.getByText('Jaylen', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/programs', '/mentors', '/events', '/success-stories']) {
      await page.goto(path)
      await expect(page.getByText('Bright Futures', { exact: false }).first()).toBeVisible()
    }
  })
})
