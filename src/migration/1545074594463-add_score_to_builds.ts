import {MigrationInterface, QueryRunner} from "typeorm";

export class addScoreToBuilds1545074594463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` ADD `score` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` DROP COLUMN `score`");
    }

}
