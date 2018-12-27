import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyItemTable1545179163618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` DROP FOREIGN KEY `FK_d9c58f85acde2f9ab5420f6a305`");
        await queryRunner.query("CREATE TABLE `build_items_item` (`buildId` int NOT NULL, `itemId` int NOT NULL, PRIMARY KEY (`buildId`, `itemId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `base_item`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `icon`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `properties`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `modifiers`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `buildId`");
        await queryRunner.query("ALTER TABLE `item` ADD `text` text NOT NULL");
        await queryRunner.query("ALTER TABLE `build_items_item` ADD CONSTRAINT `FK_b647e0b3ff928c80dcd9cb1ae49` FOREIGN KEY (`buildId`) REFERENCES `build`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `build_items_item` ADD CONSTRAINT `FK_5352f5359eddf708472a70ff0d0` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build_items_item` DROP FOREIGN KEY `FK_5352f5359eddf708472a70ff0d0`");
        await queryRunner.query("ALTER TABLE `build_items_item` DROP FOREIGN KEY `FK_b647e0b3ff928c80dcd9cb1ae49`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `text`");
        await queryRunner.query("ALTER TABLE `item` ADD `buildId` int NULL");
        await queryRunner.query("ALTER TABLE `item` ADD `modifiers` text NOT NULL");
        await queryRunner.query("ALTER TABLE `item` ADD `properties` text NOT NULL");
        await queryRunner.query("ALTER TABLE `item` ADD `icon` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `item` ADD `base_item` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `build_items_item`");
        await queryRunner.query("ALTER TABLE `item` ADD CONSTRAINT `FK_d9c58f85acde2f9ab5420f6a305` FOREIGN KEY (`buildId`) REFERENCES `build`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
    }

}
