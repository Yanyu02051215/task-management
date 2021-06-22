package models

import (
	"log"
)

type Task struct {
	ID             int
	Department     string
	Grade          int
	Occupation     string
	Period         string
	JobDescription string
}

func (t *Task) CreateTask() (err error) {
	cmd := `insert into tasks (
		department,
		grade,
		occupation,
		period,
		job_description) values($1, $2, $3, $4, $5)`

	_, err = Db.Exec(cmd, t.Department, t.Grade, t.Occupation, t.Period, t.JobDescription)

	if err != nil {
		log.Panicln(err)
	}
	return err
}
