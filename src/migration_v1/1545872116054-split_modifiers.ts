import { MigrationInterface, QueryRunner } from "typeorm";

export class splitModifiers1545872116054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE IF EXISTS `unique_modifier`");
    await queryRunner.query(
      "CREATE TABLE `implicit` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `itemId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `explicit` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `itemId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `implicit` ADD CONSTRAINT `FK_6d167a50062137b6e89e0645eef` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`)"
    );
    await queryRunner.query(
      "ALTER TABLE `explicit` ADD CONSTRAINT `FK_2863796521715d641d196deeef9` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `explicit` DROP FOREIGN KEY `FK_2863796521715d641d196deeef9`"
    );
    await queryRunner.query(
      "ALTER TABLE `implicit` DROP FOREIGN KEY `FK_6d167a50062137b6e89e0645eef`"
    );
    await queryRunner.query("DROP TABLE `explicit`");
    await queryRunner.query("DROP TABLE `implicit`");
  }
}
