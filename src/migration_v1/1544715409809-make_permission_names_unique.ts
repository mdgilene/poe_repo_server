import {MigrationInterface, QueryRunner} from "typeorm";

export class makePermissionNamesUnique1544715409809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permission` ADD UNIQUE INDEX `IDX_240853a0c3353c25fb12434ad3` (`name`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permission` DROP INDEX `IDX_240853a0c3353c25fb12434ad3`");
    }

}
