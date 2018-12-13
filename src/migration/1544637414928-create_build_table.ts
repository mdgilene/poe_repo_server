import { MigrationInterface, QueryRunner } from "typeorm";

export class createBuildTable1544637414928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `build` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `authorId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `build` ADD CONSTRAINT `FK_2438f2695dcd0245cbf70e99537` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `build` DROP FOREIGN KEY `FK_2438f2695dcd0245cbf70e99537`"
    );
    await queryRunner.query("DROP TABLE `build`");
  }
}
