import { longitude2tile, latitude2tile } from "../math"

describe("math", () => {
  describe("longitude2tile", () => {
    it("should return properly calculated value", () => {
      const tile = longitude2tile(10)

      expect(tile).toEqual(1080)
    })

    it("should return 0 in case of bad inputs", () => {
      const tile = longitude2tile(undefined)

      expect(tile).toEqual(0)
    })
  })

  describe("latitude2tile", () => {
    it("should return properly calculated value", () => {
      const tile = latitude2tile(10)

      expect(tile).toEqual(966)
    })

    it("should return 0 in case of bad inputs", () => {
      const tile = latitude2tile(undefined)

      expect(tile).toEqual(0)
    })
  })
})
