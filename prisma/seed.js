import db from '../lib/db.js';

const users = [
  { name: "sexyoung", email: "sexyoung@example.com" },
  { name: "lulu", email: "lulu@example.com" }
];

async function seed() {
  for (const user of users) {
    await db.user.create({ data: user });
  }
}

seed().catch(console.error);