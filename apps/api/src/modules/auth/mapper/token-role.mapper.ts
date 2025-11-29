import { Injectable } from '@nestjs/common';

import { TokenRole, UserRole } from '../enums';

export abstract class Mapper<Source, Target> {
  abstract map(source: Source): Target;
}

@Injectable()
export class UserRoleToTokenRoleMapper extends Mapper<UserRole, TokenRole> {
  map(source: UserRole): TokenRole {
    switch (source) {
      case UserRole.SUPER_ADMIN:
        return TokenRole.SUPER_ADMIN;
      case UserRole.ADMIN:
        return TokenRole.ADMIN;
      case UserRole.BASIC:
        return TokenRole.GUEST;
      default:
        return TokenRole.GUEST;
    }
  }
}
