// src/migrate.ts

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { migrate } from 'drizzle-orm/neon-http/migrator'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: './src/drizzle/migrations' })
    console.log('Migration completed')
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

main()
