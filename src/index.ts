import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import bodyParser from 'body-parser'

import booksRouter from './routes/books';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use('/books', booksRouter);

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
