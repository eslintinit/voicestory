# Backend

## Set up prisma-multi-tenant

### 1) set enviroment variables

create .env file:
```
DATABASE_URL=postgresql://digital@localhost:5432/voicestory

MANAGEMENT_PROVIDER=postgresql
MANAGEMENT_URL=postgresql://digital@localhost:5432/voicestory?schema=management

FRONTEND_URL=http://localhost:3000

TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_TOKEN=
TWITTER_TOKEN_SECRET=

APP_SECRET=
```

### 2) install dependencies

```
npm i
```

### 3) initialize prisma-multi-tenant

```
npx prisma-multi-tenant init
```
set provider and database url to:
```
{
  provider: 'postgresql',
  url: 'postgresql://digital@localhost:5432/voicestory?schema=management'
}
```


check if prisma-multi-tenant is installed correctly:
```
npx prisma-multi-tenant list
```

## Create a tenant

https://github.com/Errorname/prisma-multi-tenant/blob/master/docs/Complete_Documentation.md#createtenanttenant--name-string-provider-string-url-string--options-any-promiseprismaclient

### create

```
npx prisma-multi-tenant new
```
```
{
  name: 'voicestory'.
  provider: 'postgresql',
  url: 'postgresql://digital@localhost:5432/voicestory?schema=voicestory'
}
```

-- seed data


# Misc
Node Version: 12.2.0
