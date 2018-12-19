import { MigrationInterface, QueryRunner } from "typeorm";

export class makeItemTextUnique1545179237630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `item` ADD UNIQUE INDEX `IDX_fd11936812b9d848277610792c` (`text`(767))"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `item` DROP INDEX `IDX_fd11936812b9d848277610792c`"
    );
  }
}
