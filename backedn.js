const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.updateOne(
    { _id: userId },
    { $inc: { balance: -100 } },
    { session },
  );
  await Account.updateOne(
    { _id: accountId },
    { $inc: { balance: 100 } },
    { session },
  );
  await session.commitTransaction(); // commit only if all succeed
} catch (error) {
  await session.abortTransaction(); // rollback everything if any operation fails
  console.error("Transaction failed:", error);
} finally {
  session.endSession();
  
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("int")
    balance: number;
}

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: string;

    @Column("int")
    balance: number;
}

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./User";
import { Account } from "./Account";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "your_password",
  database: "testdb",
  synchronize: true, // only for dev
  entities: [User, Account],
});

async function runTransaction() {
  const dataSource = await AppDataSource.initialize();

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    // Example: Deduct from user
    await queryRunner.manager.update(User, 1, {
      balance: () => "balance - 100",
    });

    // Example: Add to account
    await queryRunner.manager.update(Account, 1, {
      balance: () => "balance + 100",
    });

    // Commit transaction if all succeeds
    await queryRunner.commitTransaction();
    console.log("Transaction completed successfully!");
  } catch (error) {
    // Rollback if anything goes wrong
    await queryRunner.rollbackTransaction();
    console.error("Transaction failed, rollback executed:", error);
  } finally {
    await queryRunner.release();
  }
}

runTransaction();


const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'your_password',
  port: 5432,
});

async function runTransaction() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN'); // start transaction

    // Deduct 100 from user with id=1
    await client.query(
      'UPDATE users SET balance = balance - $1 WHERE id = $2',
      [100, 1]
    );

    // Add 100 to account with id=1
    await client.query(
      'UPDATE accounts SET balance = balance + $1 WHERE id = $2',
      [100, 1]
    );

    await client.query('COMMIT'); // commit transaction
    console.log('Transaction completed successfully!');
  } catch (err) {
    await client.query('ROLLBACK'); // rollback if anything goes wrong
    console.error('Transaction failed, rollback executed:', err);
  } finally {
    client.release();
  }
}

runTransaction();