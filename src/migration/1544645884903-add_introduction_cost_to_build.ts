import { MigrationInterface, QueryRunner } from "typeorm";

export class addIntroductionCostToBuild1544645884903
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `build` ADD `introduction_text` text NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `build` ADD `cost_text` text NOT NULL"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `build` DROP COLUMN `cost_text`");
    await queryRunner.query(
      "ALTER TABLE `build` DROP COLUMN `introduction_text`"
    );
  }
}
