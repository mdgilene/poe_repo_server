import {MigrationInterface, QueryRunner} from "typeorm";

export class createBaseItemTable1545939758098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_5ef31366ed612586c507828c77a`");
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_9863256fa8092e86a11e1c4e3d8`");
        await queryRunner.query("CREATE TABLE `base_item` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `subType` varchar(255) NOT NULL, `level_req` int NOT NULL, `str_req` int NOT NULL, `dex_req` int NOT NULL, `int_req` int NOT NULL, `socket_limit` int NOT NULL, `base_armour` int NOT NULL, `base_evasion` int NOT NULL, `base_energy_shield` int NOT NULL, `base_phys_min` int NOT NULL, `base_phys_max` int NOT NULL, `base_crit_chance` int NOT NULL, `base_aps` int NOT NULL, `base_flask_life` int NOT NULL, `base_flask_mana` int NOT NULL, `base_flask_duration` int NOT NULL, `base_flask_charges_used` int NOT NULL, `base_flask_charges_max` int NOT NULL, `implicitId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `flask_buffs` (`baseItemId` int NOT NULL, `implicitId` int NOT NULL, PRIMARY KEY (`baseItemId`, `implicitId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `base_item` ADD CONSTRAINT `FK_d9c58dc97fe038ede64b159573c` FOREIGN KEY (`implicitId`) REFERENCES `implicit`(`id`)");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_de6d658692e25d4ae972926c5a7` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_bc14b802087440f57db9c7eddf4` FOREIGN KEY (`variantId`) REFERENCES `variant`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `flask_buffs` ADD CONSTRAINT `FK_3143da96d8fbe5fe979c29f7d7d` FOREIGN KEY (`baseItemId`) REFERENCES `base_item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `flask_buffs` ADD CONSTRAINT `FK_a048416419392903e3f54d6ee1f` FOREIGN KEY (`implicitId`) REFERENCES `implicit`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `flask_buffs` DROP FOREIGN KEY `FK_a048416419392903e3f54d6ee1f`");
        await queryRunner.query("ALTER TABLE `flask_buffs` DROP FOREIGN KEY `FK_3143da96d8fbe5fe979c29f7d7d`");
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_bc14b802087440f57db9c7eddf4`");
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_de6d658692e25d4ae972926c5a7`");
        await queryRunner.query("ALTER TABLE `base_item` DROP FOREIGN KEY `FK_d9c58dc97fe038ede64b159573c`");
        await queryRunner.query("DROP TABLE `flask_buffs`");
        await queryRunner.query("DROP TABLE `base_item`");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_9863256fa8092e86a11e1c4e3d8` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_5ef31366ed612586c507828c77a` FOREIGN KEY (`variantId`) REFERENCES `variant`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT");
    }

}
