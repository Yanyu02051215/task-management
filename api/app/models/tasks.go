package models

import (
	"fmt"
	"log"
	"strings"
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

func (dao TaskDao) CreateTask(ts []Task) (err error) {

	var valuesSql []string
	vals := []interface{}{}
	i := 1
	for _, t := range ts {
		valuesSql = append(valuesSql, fmt.Sprintf("($%d, $%d, $%d, $%d, $%d)", i, i+1, i+2, i+3, i+4))
		vals = append(vals, t.Department, t.Grade, t.Occupation, t.Period, t.JobDescription)
		i += 5
	}

	cmd := `insert into tasks (
		department,
		grade,
		occupation,
		period,
		job_description) values` + strings.Join(valuesSql, ", ")
	fmt.Printf(cmd)

	// _, err = Db.Exec(cmd, t.Department, t.Grade, t.Occupation, t.Period, t.JobDescription)
	_, err = Db.Exec(cmd, vals...)

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
