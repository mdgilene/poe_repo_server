import {MigrationInterface, QueryRunner} from "typeorm";

export class v2Start1545943774941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `item_modifier` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, UNIQUE INDEX `IDX_59e1fd3162e0b3cbf35fa5ba64` (`text`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `base_item` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `subType` varchar(255) NOT NULL, `level_req` int NOT NULL, `str_req` int NOT NULL, `dex_req` int NOT NULL, `int_req` int NOT NULL, `socket_limit` int NOT NULL, `base_armour` int NOT NULL, `base_evasion` int NOT NULL, `base_energy_shield` int NOT NULL, `base_phys_min` int NOT NULL, `base_phys_max` int NOT NULL, `base_crit_chance` float NOT NULL, `base_aps` float NOT NULL, `base_flask_life` int NOT NULL, `base_flask_mana` int NOT NULL, `base_flask_duration` float NOT NULL, `base_flask_charges_used` int NOT NULL, `base_flask_charges_max` int NOT NULL, `implicitId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `permission` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_240853a0c3353c25fb12434ad3` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password_hash` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `variant` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_1d2554c1d583abf751aed82c6c` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `rarity` enum ('normal', 'magic', 'rare', 'unique') NOT NULL, `name` varchar(255) NOT NULL, `slot` varchar(255) NOT NULL, `level_req` int NOT NULL, `stat_req` varchar(255) NOT NULL, `source` varchar(255) NOT NULL, `upgrade` varchar(255) NOT NULL, `corrupted` tinyint NOT NULL, `shaper` tinyint NOT NULL, `elder` tinyint NOT NULL, `baseItemId` int NULL, `leagueId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `build` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `introduction_text` text NOT NULL, `cost_text` text NOT NULL, `item_text` text NOT NULL, `score` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `authorId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `flask_buffs` (`baseItemId` int NOT NULL, `itemModifierId` int NOT NULL, PRIMARY KEY (`baseItemId`, `itemModifierId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role_permissions` (`roleId` int NOT NULL, `permissionId` int NOT NULL, PRIMARY KEY (`roleId`, `permissionId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_roles` (`userId` int NOT NULL, `roleId` int NOT NULL, PRIMARY KEY (`userId`, `roleId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `item_variants` (`itemId` int NOT NULL, `variantId` int NOT NULL, PRIMARY KEY (`itemId`, `variantId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `item_implicit_modifiers` (`itemId` int NOT NULL, `itemModifierId` int NOT NULL, PRIMARY KEY (`itemId`, `itemModifierId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `item_explicit_modifiers` (`itemId` int NOT NULL, `itemModifierId` int NOT NULL, PRIMARY KEY (`itemId`, `itemModifierId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `build_items` (`buildId` int NOT NULL, `itemId` int NOT NULL, PRIMARY KEY (`buildId`, `itemId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `base_item` ADD CONSTRAINT `FK_d9c58dc97fe038ede64b159573c` FOREIGN KEY (`implicitId`) REFERENCES `item_modifier`(`id`)");
        await queryRunner.query("ALTER TABLE `item` ADD CONSTRAINT `FK_8ea14fc03cd5d73c950b3e75436` FOREIGN KEY (`baseItemId`) REFERENCES `base_item`(`id`)");
        await queryRunner.query("ALTER TABLE `item` ADD CONSTRAINT `FK_1b7c14f76e2575971bb66a459e4` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `build` ADD CONSTRAINT `FK_2438f2695dcd0245cbf70e99537` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `flask_buffs` ADD CONSTRAINT `FK_3143da96d8fbe5fe979c29f7d7d` FOREIGN KEY (`baseItemId`) REFERENCES `base_item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `flask_buffs` ADD CONSTRAINT `FK_d81e43d607955998bd7231cb3df` FOREIGN KEY (`itemModifierId`) REFERENCES `item_modifier`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `role_permissions` ADD CONSTRAINT `FK_b4599f8b8f548d35850afa2d12c` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `role_permissions` ADD CONSTRAINT `FK_06792d0c62ce6b0203c03643cdd` FOREIGN KEY (`permissionId`) REFERENCES `permission`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_472b25323af01488f1f66a06b67` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_86033897c009fcca8b6505d6be2` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_de6d658692e25d4ae972926c5a7` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_variants` ADD CONSTRAINT `FK_bc14b802087440f57db9c7eddf4` FOREIGN KEY (`variantId`) REFERENCES `variant`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_implicit_modifiers` ADD CONSTRAINT `FK_11e5d652d0d1ea6cc64af3cba80` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_implicit_modifiers` ADD CONSTRAINT `FK_cc9c1d57e864152282b927846a4` FOREIGN KEY (`itemModifierId`) REFERENCES `item_modifier`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_explicit_modifiers` ADD CONSTRAINT `FK_119857e3375a167b6c4ff41c1ba` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `item_explicit_modifiers` ADD CONSTRAINT `FK_22432f65dc29af42625adb10cc8` FOREIGN KEY (`itemModifierId`) REFERENCES `item_modifier`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `build_items` ADD CONSTRAINT `FK_b9b3ff4c53f5dcf175c4b414abb` FOREIGN KEY (`buildId`) REFERENCES `build`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `build_items` ADD CONSTRAINT `FK_cbef942a4303fc4ace941684423` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build_items` DROP FOREIGN KEY `FK_cbef942a4303fc4ace941684423`");
        await queryRunner.query("ALTER TABLE `build_items` DROP FOREIGN KEY `FK_b9b3ff4c53f5dcf175c4b414abb`");
        await queryRunner.query("ALTER TABLE `item_explicit_modifiers` DROP FOREIGN KEY `FK_22432f65dc29af42625adb10cc8`");
        await queryRunner.query("ALTER TABLE `item_explicit_modifiers` DROP FOREIGN KEY `FK_119857e3375a167b6c4ff41c1ba`");
        await queryRunner.query("ALTER TABLE `item_implicit_modifiers` DROP FOREIGN KEY `FK_cc9c1d57e864152282b927846a4`");
        await queryRunner.query("ALTER TABLE `item_implicit_modifiers` DROP FOREIGN KEY `FK_11e5d652d0d1ea6cc64af3cba80`");
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_bc14b802087440f57db9c7eddf4`");
        await queryRunner.query("ALTER TABLE `item_variants` DROP FOREIGN KEY `FK_de6d658692e25d4ae972926c5a7`");
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_86033897c009fcca8b6505d6be2`");
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_472b25323af01488f1f66a06b67`");
        await queryRunner.query("ALTER TABLE `role_permissions` DROP FOREIGN KEY `FK_06792d0c62ce6b0203c03643cdd`");
        await queryRunner.query("ALTER TABLE `role_permissions` DROP FOREIGN KEY `FK_b4599f8b8f548d35850afa2d12c`");
        await queryRunner.query("ALTER TABLE `flask_buffs` DROP FOREIGN KEY `FK_d81e43d607955998bd7231cb3df`");
        await queryRunner.query("ALTER TABLE `flask_buffs` DROP FOREIGN KEY `FK_3143da96d8fbe5fe979c29f7d7d`");
        await queryRunner.query("ALTER TABLE `build` DROP FOREIGN KEY `FK_2438f2695dcd0245cbf70e99537`");
        await queryRunner.query("ALTER TABLE `item` DROP FOREIGN KEY `FK_1b7c14f76e2575971bb66a459e4`");
        await queryRunner.query("ALTER TABLE `item` DROP FOREIGN KEY `FK_8ea14fc03cd5d73c950b3e75436`");
        await queryRunner.query("ALTER TABLE `base_item` DROP FOREIGN KEY `FK_d9c58dc97fe038ede64b159573c`");
        await queryRunner.query("DROP TABLE `build_items`");
        await queryRunner.query("DROP TABLE `item_explicit_modifiers`");
        await queryRunner.query("DROP TABLE `item_implicit_modifiers`");
        await queryRunner.query("DROP TABLE `item_variants`");
        await queryRunner.query("DROP TABLE `user_roles`");
        await queryRunner.query("DROP TABLE `role_permissions`");
        await queryRunner.query("DROP TABLE `flask_buffs`");
        await queryRunner.query("DROP TABLE `build`");
        await queryRunner.query("DROP TABLE `item`");
        await queryRunner.query("DROP TABLE `league`");
        await queryRunner.query("DROP INDEX `IDX_1d2554c1d583abf751aed82c6c` ON `variant`");
        await queryRunner.query("DROP TABLE `variant`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP INDEX `IDX_ae4578dcaed5adff96595e6166` ON `role`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP INDEX `IDX_240853a0c3353c25fb12434ad3` ON `permission`");
        await queryRunner.query("DROP TABLE `permission`");
        await queryRunner.query("DROP TABLE `base_item`");
        await queryRunner.query("DROP INDEX `IDX_59e1fd3162e0b3cbf35fa5ba64` ON `item_modifier`");
        await queryRunner.query("DROP TABLE `item_modifier`");
    }

}
