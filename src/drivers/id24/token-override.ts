import {DecodedID24Claim} from "./models/decoded-id24-claim";

export const TokenOverride = ({
  encode: (tokenAccess: DecodedID24Claim) => encodeURIComponent(JSON.stringify(tokenAccess)),
  decode: (encoded: string): DecodedID24Claim => JSON.parse(decodeURIComponent(encoded))
});