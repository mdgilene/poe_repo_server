import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: ["normal", "magic", "rare", "unique"] })
  rarity: "normal" | "magic" | "rare" | "unique";

  @Column()
  slot: string;

  @Column({ type: "text", unique: true })
  text: string;
}
