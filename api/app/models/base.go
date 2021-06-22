package models

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var Db *sql.DB

var err error

func init() {
	Db, err = sql.Open("postgres", "user=ishikawayuuya  dbname=task_management sslmode=disable")
	if err != nil {
		log.Panicln(err)
	}
	defer Db.Close()
}
