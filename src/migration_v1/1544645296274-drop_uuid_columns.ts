import { MigrationInterface, QueryRunner } from "typeorm";

export class dropUuidColumns1544645296274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `user` DROP COLUMN `uuid`");
    await queryRunner.query("ALTER TABLE `build` DROP COLUMN `uuid`");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `build` ADD `uuid` varchar(255) NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `user` ADD `uuid` varchar(255) NOT NULL"
    );
  }
}
