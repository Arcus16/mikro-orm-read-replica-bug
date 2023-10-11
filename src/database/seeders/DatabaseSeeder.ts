import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User } from "../../entities/user.entity";

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const dbUrl = process.env.DATABASE_URL!
    
    const data : Partial<User> = dbUrl.includes('read') ? { firstName: "John", lastName: "Doe" } : { firstName: "Jane", lastName: "Doe" }
    await em.insert(User, data);
  }
}
