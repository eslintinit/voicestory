# Backend

```
yarn
npx prisma migrate save --name 'init' --experimental
npx prisma migrate up --experimental
npx prisma generate
yarn dev
```

Notice that you should have .env.development in the root folder (`voicestory/.env.development`)
