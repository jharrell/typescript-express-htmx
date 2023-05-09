# Prisma and HTMx Example

This example showcases [HTMx](https://htmx.org/) in a simple [Express](https://expressjs.com/) app backed by [Prisma](https://prisma.io/). This is in no way a production app or template.


## Getting started

### 1. Pull code and install dependencies

Clone repo:

```
git clone git@github.com:jharrell/typescript-express-htmx.git
```

Install deps:

```
cd typescript-express-htmx
pnpm i
```

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `Book` table defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
pnpx prisma migrate dev --name init
```

When `pnpx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 3. Start the REST API server

```
pnpm run dev
```

The server is now running on `http://localhost:3000`. You can now run the API requests, e.g. [`http://localhost:3000/books`](http://localhost:3000/books).

## Using the REST API

TODO (sorry)

## Switch to another database (e.g. PostgreSQL, MySQL, SQL Server, MongoDB)

If you want to try this example with another database than SQLite, you can adjust the the database connection in [`prisma/schema.prisma`](./prisma/schema.prisma) by reconfiguring the `datasource` block. 

Learn more about the different connection configurations in the [Prisma docs](https://www.prisma.io/docs/reference/database-reference/connection-urls).

<details><summary>Expand for an overview of example configurations with different databases</summary>

### PostgreSQL

For PostgreSQL, the connection URL has the following structure:

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
}
```

Here is an example connection string with a local PostgreSQL database:

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://janedoe:mypassword@localhost:5432/notesapi?schema=public"
}
```

### MySQL

For MySQL, the connection URL has the following structure:

```prisma
datasource db {
  provider = "mysql"
  url      = "mysql://USER:PASSWORD@HOST:PORT/DATABASE"
}
```

Here is an example connection string with a local MySQL database:

```prisma
datasource db {
  provider = "mysql"
  url      = "mysql://janedoe:mypassword@localhost:3306/notesapi"
}
```

### Microsoft SQL Server

Here is an example connection string with a local Microsoft SQL Server database:

```prisma
datasource db {
  provider = "sqlserver"
  url      = "sqlserver://localhost:1433;initial catalog=sample;user=sa;password=mypassword;"
}
```

### MongoDB

Here is an example connection string with a local MongoDB database:

```prisma
datasource db {
  provider = "mongodb"
  url      = "mongodb://USERNAME:PASSWORD@HOST/DATABASE?authSource=admin&retryWrites=true&w=majority"
}
```

</details>

## Credits

- [HTMx](https://htmx.org) for a rad product.
- [TypeScript](https://www.typescriptlang.org/) for the coolest language around.
- [Express](https://expressjs.com/), [Pug](https://pugjs.org/api/getting-started.html), and [Prisma](https://prisma.io) for the core tech of this example.
- [Code Capsules](https://codecapsules.io/docs/tutorials/build-express-htmx/) for the repo I based this off of.
- [Chris James' Blog](https://quii.dev/HTMX_is_the_Future) for clueing me into HTMx in the first place and convincing me I should care.


## Next steps

- Check me out on Twitter (`@jonbharrell`) or Bluesky (`@jharrell.co`)
- Join the Prisma Community in [Slack](https://slack.prisma.io/)
