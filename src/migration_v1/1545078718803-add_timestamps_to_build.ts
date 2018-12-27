import {MigrationInterface, QueryRunner} from "typeorm";

export class addTimestampsToBuild1545078718803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `build` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `build` DROP COLUMN `created_at`");
    }

}
