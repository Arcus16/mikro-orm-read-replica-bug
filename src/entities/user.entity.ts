import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ length: 100})
  firstName!: string;

  @Property({ length: 100})
  lastName!: string;
}