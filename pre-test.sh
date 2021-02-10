#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -ujack -pJackie9an
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -ujack -pJackie9an simplon_groupx_test