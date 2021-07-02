import { InvalidTokenType } from "./InvalidTokenType";
import { TokenType } from "./TokenType";

export interface InvalidTokenResponse {
    tokenType: TokenType;
    invalidTokenType: InvalidTokenType;
};