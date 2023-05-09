import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const books = await prisma.book.findMany();
  return res.render('index', { books });
});

router.get('/:id', async (req, res) => {
  const { id }: { id: string } = req.params;
  const book = await prisma.book.findUnique({
    where: { id: Number(id) }
  });
  return res.render('partials/book_row', { book });
});

router.post('/', async (req, res) => {
  const { title, author }: { title: string, author: string } = req.body;
  const book = await prisma.book.create({
    data: {
      title,
      author,
    }
  });
  return res.render('partials/book_row', { book });
});

router.get('/:id/edit', async (req, res) => {
  const { id }: { id: string } = req.params;
  const book = await prisma.book.findUnique({
    where: { id: Number(id) }
  });
  return res.render('partials/book_row_edit', { book });
});

router.put('/:id', async (req, res) => {
  const { id }: { id: string } = req.params;
  const { title, author }: { title: string, author: string } = req.body;
  const book = await prisma.book.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      author,
    },
  });
  return res.render('partials/book_row', { book });
});

router.delete('/:id', async (req, res) => {
  const { id }: { id: string } = req.params;
  const book = await prisma.book.delete({
    where: {
      id: Number(id),
    },
  });
  return res.send('');
});

export default router;
