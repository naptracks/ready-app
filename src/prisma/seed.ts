import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Implement seeds here
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
