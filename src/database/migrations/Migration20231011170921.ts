import { Migration } from '@mikro-orm/migrations';

export class Migration20231011170921 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `first_name` varchar(100) not null, `last_name` varchar(100) not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `user`;');
  }

}
