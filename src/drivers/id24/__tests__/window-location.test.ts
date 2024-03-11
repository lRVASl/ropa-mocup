import {WindowLocation} from "../window-location"

describe("WindowLocation", () => {
  const location = {
    replace: jest.fn(),
    search: ""
  }
  describe("redirect", () => {
    it("should be able to redirect correctly", () => {
      const targetPage = "http://localhost.com"

      WindowLocation(location).redirect(targetPage)

      expect(location.replace).toHaveBeenCalledWith(targetPage)
    })
  })
})