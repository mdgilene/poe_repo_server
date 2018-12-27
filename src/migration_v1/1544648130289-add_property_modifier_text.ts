import { MigrationInterface, QueryRunner } from "typeorm";

export class addPropertyModifierText1544648130289
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `item` ADD `properties` text NOT NULL"
    );
    await queryRunner.query("ALTER TABLE `item` ADD `modifiers` text NOT NULL");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `modifiers`");
    await queryRunner.query("ALTER TABLE `item` DROP COLUMN `properties`");
  }
}
