package models

import (
	"log"
)

type TaskDao struct {
}

type Task struct {
	ID             int
	Department     string
	Grade          int
	Occupation     string
	Period         string
	JobDescription string
}

func (dao TaskDao) CreateTask(t Task) (err error) {
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

func (dao TaskDao) GetTaskLists() (tasks []Task, err error) {
	cmd := `select department, grade, occupation, period, job_description from tasks`

	rows, err := Db.Query(cmd)

	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		var task Task
		if err := rows.Scan(&task.Department, &task.Grade, &task.Occupation, &task.Period, &task.JobDescription); err != nil {
			log.Fatal(err)
		}
		tasks = append(tasks, task)
	}
	rows.Close()

	return tasks, err
}
