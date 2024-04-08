import { PrismaClient } from '@prisma/client'
import { categories } from './categories.mock.mjs'

const prisma = new PrismaClient()

async function main() {
    for (let category of categories) {
        await prisma.category.create({data: category})
    }
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