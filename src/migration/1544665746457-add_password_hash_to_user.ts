import { MigrationInterface, QueryRunner } from "typeorm";

export class addPasswordHashToUser1544665746457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `user` ADD `password_hash` varchar(255) NOT NULL"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password_hash`");
  }
}
