import { UserEntity } from '../entities/user.entity';
import { IAuthStrategy } from '../interfaces';

export abstract class BaseStrategy implements IAuthStrategy {
  abstract method: string;
  abstract validate(data: any): Promise<UserEntity>;
}
