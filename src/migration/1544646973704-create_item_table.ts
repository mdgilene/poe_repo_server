import { MigrationInterface, QueryRunner } from "typeorm";

export class createItemTable1544646973704 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `rarity` enum ('normal', 'magic', 'rare', 'unique') NOT NULL, `base_item` varchar(255) NOT NULL, `icon` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE `item`");
  }
}
