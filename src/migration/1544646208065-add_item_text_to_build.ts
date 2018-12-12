import {MigrationInterface, QueryRunner} from "typeorm";

export class addItemTextToBuild1544646208065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` ADD `item_text` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `build` DROP COLUMN `item_text`");
    }

}
