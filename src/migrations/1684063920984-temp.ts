import { MigrationInterface, QueryRunner } from "typeorm";

export class Temp1684063920984 implements MigrationInterface {
    name = 'Temp1684063920984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`intraId\` varchar(255) NOT NULL, \`coalitions\` enum ('gun', 'gon', 'gam', 'lee') NOT NULL, \`character\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`score\` int NOT NULL, \`nickname\` varchar(255) NOT NULL, \`playTime\` datetime NOT NULL, \`hidden\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`game\` ADD CONSTRAINT \`FK_a8106c0a84d70ecfc3358301c54\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`game\` DROP FOREIGN KEY \`FK_a8106c0a84d70ecfc3358301c54\``);
        await queryRunner.query(`DROP TABLE \`game\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
