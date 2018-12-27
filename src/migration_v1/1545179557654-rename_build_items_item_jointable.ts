import { MigrationInterface, QueryRunner } from "typeorm";

export class renameBuildItemsItemJointable1545179557654
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `build_items` (`buildId` int NOT NULL, `itemId` int NOT NULL, PRIMARY KEY (`buildId`, `itemId`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `build_items` ADD CONSTRAINT `FK_b9b3ff4c53f5dcf175c4b414abb` FOREIGN KEY (`buildId`) REFERENCES `build`(`id`) ON DELETE CASCADE"
    );
    await queryRunner.query(
      "ALTER TABLE `build_items` ADD CONSTRAINT `FK_cbef942a4303fc4ace941684423` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE"
    );
    await queryRunner.query("DROP TABLE build_items_item");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `build_items` DROP FOREIGN KEY `FK_cbef942a4303fc4ace941684423`"
    );
    await queryRunner.query(
      "ALTER TABLE `build_items` DROP FOREIGN KEY `FK_b9b3ff4c53f5dcf175c4b414abb`"
    );
    await queryRunner.query("DROP TABLE `build_items`");
  }
}
