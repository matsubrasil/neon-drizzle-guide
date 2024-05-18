import { asc, between, sql } from 'drizzle-orm'
import { db } from './drizzle/db'

import { UserPreferencesTable, UserTable } from './drizzle/schema'

/*
const main = async () => {
  try {
    await db.delete(UserTable)

    const user = await db
      .insert(UserTable)
      .values([
        {
          name: ' Kyle',
          age: 29,
          email: 'kyle@email.com',
        },
        {
          name: ' Sally',
          age: 25,
          email: 'sally@email.com',
        },
      ])
      .returning({
        id: UserTable.id,
      })
    console.log(user)
  } catch (error) {
    console.error('Error during execution:', error)
    process.exit(1)
  }
}

*/
const main = async () => {
  // await db
  //   .insert(UserPreferencesTable)
  //   .values({
  //     emailUpdates: true,
  //     userId: '8e4b0dd5-efcc-4803-a259-c62fccdb5300',
  //   })
  // const users = await db.query.UserTable.findMany({
  //   columns: { name: true, email: true, id: true },
  //   with: {
  //     preferences: {
  //       columns: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   extras: {
  //     lowerCaseName: sql<string>`lower(${UserTable.name})`.as('lowerCaseName'),
  //   },
  // })

  // const users = await db.query.UserTable.findMany({
  //   columns: { age: true, id: true, name: true },
  //   where: (table, funcs) => funcs.between(table.age, 20, 30),
  //   orderBy: (table, funcs) => funcs.desc(table.age),
  // })

  const users = await db
    .select({
      name: UserTable.name,
      age: UserTable.age,
    })
    .from(UserTable)
    .where(between(UserTable.age, 20, 30))
    .orderBy(asc(UserTable.name))

  console.log(users)
}
main()
