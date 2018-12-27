import { MigrationInterface, QueryRunner } from "typeorm";

export class updateItemSchemaForNewDataModel1545868486697
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "DROP INDEX `IDX_fd11936812b9d848277610792c` ON `item`"
    );
    await queryRunner.query(
      "CREATE TABLE `variant` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_1d2554c1d583abf751aed82c6c` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `league` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `unique_modifier` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `itemId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `item_variants` (`itemId` int NOT NULL, `variantId` int NOT NULL, PRIMARY KEY (`itemId`, `variantId`)) ENGINE=InnoDB"
    );
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `text`");
    await queryRunner.query(
      "ALTER TABLE `item` ADD `base_item` varchar(255) NOT NULL"
    );
    await queryRunner.query("ALTER TABLE `item` ADD `level_req` int NOT NULL");
    await queryRunner.query(
      "ALTER TABLE `item` ADD `stat_req` varchar(255) NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `item` ADD `source` varchar(255) NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `item` ADD `upgrade` varchar(255) NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `item` ADD `corrupted` tinyint NOT NULL"
    );
    await queryRunner.query("ALTER TABLE `item` ADD `shaper` tinyint NOT NULL");
    await queryRunner.query("ALTER TABLE `item` ADD `elder` tinyint NOT NULL");
    await queryRunner.query("ALTER TABLE `item` ADD `leagueId` int NULL");
    await queryRunner.query(
      "ALTER TABLE `unique_modifier` ADD CONSTRAINT `FK_63548b62ac3ba15f9c92cf9a261` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`)"
    );
    await queryRunner.query(
      "ALTER TABLE `item` ADD CONSTRAINT `FK_1b7c14f76e2575971bb66a459e4` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)"
    );
    await queryRunner.query(
      "ALTER TABLE `item_variants` ADD CONSTRAINT `FK_9863256fa8092e86a11e1c4e3d8` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE"
    );
    await queryRunner.query(
      "ALTER TABLE `item_variants` ADD CONSTRAINT `FK_5ef31366ed612586c507828c77a` FOREIGN KEY (`variantId`) REFERENCES `variant`(`id`) ON DELETE CASCADE"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_5ef31366ed612586c507828c77a`"
    );
    await queryRunner.query(
      "ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_9863256fa8092e86a11e1c4e3d8`"
    );
    await queryRunner.query(
      "ALTER TABLE `item` DROP FOREIGN KEY `FK_1b7c14f76e2575971bb66a459e4`"
    );
    await queryRunner.query(
      "ALTER TABLE `unique_modifier` DROP FOREIGN KEY `FK_63548b62ac3ba15f9c92cf9a261`"
    );
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `leagueId`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `elder`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `shaper`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `corrupted`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `upgrade`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `source`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `stat_req`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `level_req`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `base_item`");
    await queryRunner.query("ALTER TABLE `item` ADD `text` text NOT NULL");
    await queryRunner.query("DROP TABLE `item_variants_variant`");
    await queryRunner.query("DROP TABLE `unique_modifier`");
    await queryRunner.query("DROP TABLE `league`");
    await queryRunner.query(
      "DROP INDEX `IDX_1d2554c1d583abf751aed82c6c` ON `variant`"
    );
    await queryRunner.query("DROP TABLE `variant`");
    await queryRunner.query(
      "CREATE UNIQUE INDEX `IDX_fd11936812b9d848277610792c` ON `item`(`text`)"
    );
  }
}
