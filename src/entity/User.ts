import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
  FindOneOptions
} from "typeorm";
import { Role } from "./Role";
import { Build } from "./Build";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password_hash: string;

  @ManyToMany(type => Role, role => role.users)
  @JoinTable({
    name: "user_roles"
  })
  roles: Role[];

  @OneToMany(type => Build, build => build.author)
  builds: Build[];
}
