# Code Demo Instructions

## Overview

In this session we're taking our project from Day 1 and merging our knowledge from Day 2 to make this a Sequelize app.

## VS Code Terminal - `bash.sh` Has Syntax Instructions

1. Checkout to dev, pull changes and checkout to new feature branch
2. Create src and db folder
3. Add `main.js` and `model.js` to src, add `connection.js` to db
4. Create `.gitignore`
5. Run `npm init` and `npm install install sequelize && sqlite3` 

## VS Code `.gitignore` - `.gitignore` Has Syntax Instructions

6. Add `/node_modules` and `\*.sqlite`

## VS Code `connection.js` - `connection.js` Has Syntax Instructions

7. Import `Sequelize`, `DataTypes` `and` Model from the sequelize library, and `path` from the path library.
8. Create a `new Sequelize` instance and save it to a db constant, using `path.join` for the storage.
9. Export db, DataTypes, and Model.

## VS Code `model.js` - `model.js` Has Syntax Instructions

10. Import `db`, `DataTypes` and `Model` from `connection.js`
11. Create a pokemon class, extending the model class
12. Run `Pokemon.init()` passing in the schema object and the connection object
13. Export Pokemon

## VS Code `main.js` - `main.js` Has Syntax Instructions

14. Import db from `connection.js` and Pokemon from `model.js`
15. Remove contents of `main` function and call `db.sync()`
16. Demonstrate `Model.create` and `Model.bulkCreate`, remembering to use `JSON.stringify` to console log return values from sequelize
17. Demonstrate `Model.findOne` and `Model.findAll`, showing the return values
18. Demonstrate `Model.update`, showing the return value
19. Demonstrate `Model.destroy`, showing the return value

## VS Code Terminal - `bash.sh` Has Syntax Instructions

20. `git` workflow

## GitHub

21. Merge feature branch into dev branch
