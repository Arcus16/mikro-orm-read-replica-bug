import * as dotenv from 'dotenv';
dotenv.config();

import { LoadStrategy, Options } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config = {
    type: 'mysql',
    clientUrl: encodeURI(process.env.DATABASE_URL ?? ''),
    name: 'write',
    preferReadReplicas: true,
    replicas: [
      {
        name: 'read',
        clientUrl: encodeURI(process.env.DATABASE_URL_READ ?? ''),  
      }
    ],
    entities: ['src/**/*.entity.ts'],
    entitiesTs: ['src/**/*.entity.ts'],
    migrations: {
        pathTs: 'src/database/migrations',
    },
    debug: true,
    highlighter: new SqlHighlighter(),
    loadStrategy: LoadStrategy.JOINED,
    autoJoinOneToOneOwner: false,
    timezone: '+00:00',
    seeder: {
        pathTs: 'src/database/seeders',
        defaultSeeder: 'DatabaseSeeder',
        emit: 'ts',
    },
} satisfies Options<MySqlDriver>

export default config;
