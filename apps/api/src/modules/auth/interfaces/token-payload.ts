import { TokenRole } from '../enums';

export interface TokenPayload {
  sub: string; // userId
  tokenRole: TokenRole;
  method: string;
  iat?: number;
  exp?: number;
}
