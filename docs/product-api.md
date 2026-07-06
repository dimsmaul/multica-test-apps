# Product API

Base URL: `/api/products`

Model fields: `id` (uuid, auto), `name` (string), `price` (float), `description` (string), `createdAt`, `updatedAt` (auto).

## List products

```
GET /api/products
```

Response `200`:

```json
[
  {
    "id": "uuid",
    "name": "Keyboard",
    "price": 49.99,
    "description": "Mechanical keyboard",
    "createdAt": "2026-07-06T00:00:00.000Z",
    "updatedAt": "2026-07-06T00:00:00.000Z"
  }
]
```

## Create product

```
POST /api/products
Content-Type: application/json

{
  "name": "Keyboard",
  "price": 49.99,
  "description": "Mechanical keyboard"
}
```

Response `201`: created product object.
Response `400` if `name`, `price`, or `description` missing.

## Get product by id

```
GET /api/products/:id
```

Response `200`: product object.
Response `404` if not found.

## Update product

```
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Keyboard v2",
  "price": 59.99,
  "description": "Mechanical keyboard, updated"
}
```

Response `200`: updated product object.
Response `404` if not found.

## Delete product

```
DELETE /api/products/:id
```

Response `200`: `{ "success": true }`.
Response `404` if not found.

## Note on DB schema

`Product` model added to `prisma/schema.prisma`. Table not pushed to the live Neon DB from this run — no `DATABASE_URL` available in this environment. Run against the environment that has DB access:

```
npx prisma db push
```
