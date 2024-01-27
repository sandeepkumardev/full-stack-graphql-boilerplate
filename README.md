## Overview

This project is a boilerplate for a full-stack web application built using React, Express, GraphQL, and Apollo. The purpose of this document is to provide a quick guide to the project's structure, dependencies, and how to set it up and run it.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Dependencies](#dependencies)
3. [Getting Started](#getting-started)
4. [Setup Server](#setup-server)
5. [Setup Client](#setup-client)

## Project Structure

```bash
full-stack-graphql-boilerplate/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ |   ├── api/
| |   |   └── schema.graphql #Contains the Query & Mutation
| |   └── ...
│ ├── codegen.ts #Config for auto-generate types and hooks
│ └── ...
│
├── server/ #Express GraphQL backend
│ ├── src/
│ |   ├── config/
| |   |   └── db.ts #Database instance
| |   └── ...
│ └── ...
└── ...
```

## Dependencies

List the main dependencies for both the frontend and backend. Include versions to ensure compatibility.

### Frontend Dependencies

- react
- @apollo/client
- graphql

### Backend Dependencies

- express
- graphql
- apollo-server-express
- sequelize
- pg

## Getting Started

```bash
# Clone the repository
git clone https://github.com/sandeepkumardev/full-stack-graphql-boilerplate.git
```

## Setup Server

```bash
# Navigate to Server directory
cd server

# Install dependencies
yarn install

# Configure Env Variables
# Create the copy of `.env.example` file & rename it to `.env`.

# Add Database Config here
DB_NAME="postgres"
DB_USERNAME="postgres"
DB_PASSWORD="password"
DB_DIALECT="postgres"

# Start Development Server
yarn dev
```

## Setup Client

```bash
# Navigate to Client directory
cd client

# Install dependencies
yarn install

# Configure Env Variables
# Create the copy of `.env.example` file & rename it to `.env`.
# No change required here in .env

# Start Server
yarn start
```
