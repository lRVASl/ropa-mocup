import {createHash, HashAlgorithm} from "../create-hash"
import * as crypto from "crypto"

describe("createHash", () => {
  it("should create hash correctly", () => {
    const challenge = "challenge"
    const actual = createHash(HashAlgorithm.SHA256, challenge)

    expect(actual)
      .toEqual(crypto.createHash(HashAlgorithm.SHA256).update(challenge).digest("base64"))
  })
})