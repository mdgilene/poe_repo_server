import {MigrationInterface, QueryRunner} from "typeorm";

export class addSlotFieldToItem1545180221054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` ADD `slot` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `slot`");
    }

}
