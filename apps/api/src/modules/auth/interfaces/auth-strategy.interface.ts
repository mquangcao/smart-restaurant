import { UserEntity } from '../entities/user.entity';

export interface IAuthStrategy {
  method: string;
  validate(data: any): Promise<UserEntity>;
}
