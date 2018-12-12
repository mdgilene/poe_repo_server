import {MigrationInterface, QueryRunner} from "typeorm";

export class addItemsToBuild1544648300924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` ADD `buildId` int NULL");
        await queryRunner.query("ALTER TABLE `item` ADD CONSTRAINT `FK_d9c58f85acde2f9ab5420f6a305` FOREIGN KEY (`buildId`) REFERENCES `build`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `item` DROP FOREIGN KEY `FK_d9c58f85acde2f9ab5420f6a305`");
        await queryRunner.query("ALTER TABLE `item` DROP COLUMN `buildId`");
    }

}
