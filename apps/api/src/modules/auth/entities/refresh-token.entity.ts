import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TokenRole } from '../enums';

@Entity({
  name: 'refresh_tokens',
})
export class RefreshTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ enum: TokenRole, type: 'enum' })
  tokenRole: TokenRole;

  @Column({ type: 'timestamp' })
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  userAgent?: string;

  @Column({ nullable: true })
  ipAddress?: string;
}
