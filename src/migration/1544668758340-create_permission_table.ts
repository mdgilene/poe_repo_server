import {MigrationInterface, QueryRunner} from "typeorm";

export class createPermissionTable1544668758340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `permission` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role_permissions` (`roleId` int NOT NULL, `permissionId` int NOT NULL, PRIMARY KEY (`roleId`, `permissionId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `role_permissions` ADD CONSTRAINT `FK_b4599f8b8f548d35850afa2d12c` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `role_permissions` ADD CONSTRAINT `FK_06792d0c62ce6b0203c03643cdd` FOREIGN KEY (`permissionId`) REFERENCES `permission`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `role_permissions` DROP FOREIGN KEY `FK_06792d0c62ce6b0203c03643cdd`");
        await queryRunner.query("ALTER TABLE `role_permissions` DROP FOREIGN KEY `FK_b4599f8b8f548d35850afa2d12c`");
        await queryRunner.query("DROP TABLE `role_permissions`");
        await queryRunner.query("DROP TABLE `permission`");
    }

}
