import {TokenOverride} from "../token-override";
import {DecodedID24Claim} from "../models/decoded-id24-claim";

describe("TokenOverride", () => {
  const userAccess = {
    organizationId: "organizationId",
    userAccess: [
      { groupId: "group-id", groupName: "group-name", roles: []}
    ]};
  const id24Claim: DecodedID24Claim = {
    userId: "userId",
    clientId: "clientId",
    access: userAccess,
  };

  const stringified = JSON.stringify(id24Claim);
  const base64Encode = encodeURIComponent(stringified);

  describe("encode", () => {
    const { encode } = TokenOverride;

    it("should be able to encode token", () => {
      const actual = encode(id24Claim);

      expect(actual).toEqual(base64Encode);
    });
  });

  describe("decode", () => {
    const { decode } = TokenOverride;

    it("should be able to encode token", () => {
      const actual = decode(base64Encode);

      expect(actual).toEqual(id24Claim);
    });
  });
});