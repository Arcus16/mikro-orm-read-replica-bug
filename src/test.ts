import { MikroORM } from "@mikro-orm/mysql";
import mikroOrmConfig from "../mikro-orm.config";
import { User } from "./entities/user.entity";

async function main() {
  const orm = await MikroORM.init(mikroOrmConfig);
  const em = orm.em.fork();
  const userWrite = await em.find(User, { id: 1 }, { connectionType: "write" });
  const userRead = await em.find(User, { id: 1 }, { connectionType: "read" });
  console.log({ userWrite, userRead });
  await orm.close();
}
main();
