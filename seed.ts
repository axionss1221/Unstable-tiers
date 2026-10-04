import { PrismaClient } from '@prisma/client';
const db=new PrismaClient();
async function main(){await db.player.deleteMany(); console.log('Database ready. No random players were inserted.');}
main().finally(()=>db.$disconnect());
