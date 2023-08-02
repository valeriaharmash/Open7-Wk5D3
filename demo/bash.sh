# 1. checkout to dev, pull changes and checkout to new feature branch
git checkout dev
git pull origin dev
git checkout -b db-layer
# 2. create src and db folder
mkdir src db
# 3. add main.js and model.js to src, add connection.js to db
mv main.js src
touch src/model.js db/connection.js
# 4. create .gitignore
touch .gitignore
# 5. run npm init and install sequelize and sqlite3
npm init -y
npm i sequelize sqlite3
# Go to .gitignore

# 20. git workflow
git add .
git commit -m "some message"
git push --set-upstream origin db-layer