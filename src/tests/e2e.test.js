/* eslint-disable */

describe("Todos test", () => {
  it("Checks that add todo button routes to new", async () => {
    await page.goto("http://localhost:3000/")
    await expect(page).toClick("button", { text: "Add Todo +" })
    await expect(page.url()).toEqual("http://localhost:3000/new")
    await page.waitForSelector("h1")
    const headerText = await page.$eval("h1", (e) => e.textContent)
    expect(headerText).toContain("New Todo")
  })
})
