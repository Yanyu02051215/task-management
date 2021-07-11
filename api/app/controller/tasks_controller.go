package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"task-management/app/models"
)

type TaskController struct{}

func (t TaskController) CreateTask() gin.HandlerFunc {
	return func(c *gin.Context) {
		var tasks []models.Task
		tasks = append(tasks, models.Task{ID: 2, Department: "第2部門", Grade: 1, Occupation: "営業", Period: "週", JobDescription: "朝礼2"},
			models.Task{ID: 3, Department: "第3部門", Grade: 1, Occupation: "営業", Period: "週", JobDescription: "朝礼3"})
		fmt.Printf("%v\n", tasks)
		// task := models.Task{ID: 1, Department: "第一部門", Grade: 1, Occupation: "営業", Period: "週", JobDescription: "朝礼"}
		dao := models.TaskDao{}
		err := dao.CreateTask(tasks)

		if err != nil {
			log.Print(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err,
			})
		}
		c.JSON(http.StatusOK, gin.H{
			"message": tasks,
		})
	}
}

func (t TaskController) GetTasks() gin.HandlerFunc {
	return func(c *gin.Context) {

		dao := models.TaskDao{}
		tasks, err := dao.GetTaskLists()
		if err != nil {
			log.Print(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err,
			})
		}
		c.JSON(http.StatusOK, gin.H{
			"message": tasks,
		})
	}
}
