## How to reproduce:
1. You will need the mysql database, you can download docker image here https://hub.docker.com/r/arm64v8/mysql/
2. Crate two schemas bug_reproduction and bug_reproduction_read
3. Run `npm i` in the root of this project
3. Run `npm run migrate` from root of this project
4. Change `DATABASE_URL` in `.env` to `mysql://root:@localhost:3306/bug_reproduction_read` and run `npm run migrate` after successfull migration revert changes.
5. Check that in bug_reproduction db is are two Users with name Jane and in bug_reproduction_red are two Users with name John
6. Run script `npm run test`
7. In file `mikro-orm.config` replace row `clientUrl` for replica with `        dbName: 'bug_reproduction_read'`
8. Run script `npm run test` again
9. Both run of `npm run test` should print the same values, but they differ.