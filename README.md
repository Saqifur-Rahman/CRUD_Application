# CRUD_Application
Platform For Managing Students and Campuses

## Setup
1. Install PostgreSQL with pgadmin and connect with PostgreSQL server.
2. In `backend/database/utils/configDB`, mention your credentials:
```
const dbName = 'server_name';
const dbUser = 'postgres';          //postgres is the default user
const dbPwd = 'user_password';
```
3. Run backend (node & express)
```
npm run dev
```
4. After seeding the database in backend terminal, run frontend.
```
npm start
```