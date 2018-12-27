import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyBaseItemColumnsToFloat1545940669628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_crit_chance`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_crit_chance` float NOT NULL");
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_aps`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_aps` float NOT NULL");
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_flask_duration`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_flask_duration` float NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_flask_duration`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_flask_duration` int NOT NULL");
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_aps`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_aps` int NOT NULL");
        await queryRunner.query("ALTER TABLE `base_item` DROP COLUMN `base_crit_chance`");
        await queryRunner.query("ALTER TABLE `base_item` ADD `base_crit_chance` int NOT NULL");
    }

}
