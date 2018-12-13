import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BaseEntity,
  JoinTable
} from "typeorm";
import { User } from "./User";
import { Permission } from "./Permission";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => User, user => user.roles)
  users: User[];

  @ManyToMany(type => Permission, permission => permission.roles, {
    eager: true
  })
  @JoinTable({ name: "role_permissions" })
  permissions: Permission[];
}
