import {MigrationInterface, QueryRunner} from "typeorm";

export class addItemNameToItemSchema1545868819315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` ADD `name` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `name`");
    }

}
