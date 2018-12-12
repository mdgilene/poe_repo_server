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

  @Column({ unique: true, select: false })
  email: string;

  @ManyToMany(type => Role)
  @JoinTable({
    name: "user_roles"
  })
  roles: Role[];

  @OneToMany(type => Build, build => build.author)
  builds: Build[];

  static findOneByUsername(username: string): Promise<User> {
    return this.createQueryBuilder("user")
      .where("user.username = :username", { username })
      .getOne();
  }

  static async getBuilds(username: string): Promise<Build[]> {
    const user = await User.findOne({ username }, { relations: ["builds"] });
    return user.builds;
  }
}
