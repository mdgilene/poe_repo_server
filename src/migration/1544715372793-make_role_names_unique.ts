import {MigrationInterface, QueryRunner} from "typeorm";

export class makeRoleNamesUnique1544715372793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `role` ADD UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `role` DROP INDEX `IDX_ae4578dcaed5adff96595e6166`");
    }

}
