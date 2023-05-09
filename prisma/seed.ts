import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const bookData: Prisma.BookCreateInput[] = [
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const b of bookData) {
    const book = await prisma.book.create({ data: b });
    console.log(`Created book with id: ${book.id}`);
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
