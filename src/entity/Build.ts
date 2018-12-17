import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "./User";
import { Item } from "./Item";

@Entity()
export class Build extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => User, { eager: true })
  author: User;

  @Column({ type: "text" })
  introduction_text: string;

  @Column({ type: "text" })
  cost_text: string;

  @Column({ type: "text" })
  item_text: string;

  @OneToMany(type => Item, item => item.build, { eager: true, cascade: true })
  items: Item[];

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
