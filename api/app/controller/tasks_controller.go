package controller

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"task-management/app/models"
)

type TaskController struct{}

func (t TaskController) CreateTask() gin.HandlerFunc {
	return func(c *gin.Context) {
		task := models.Task{ID: 1, Department: "第一部門", Grade: 1, Occupation: "営業", Period: "週", JobDescription: "朝礼"}
		dao := models.TaskDao{}
		err := dao.CreateTask(task)

		if err != nil {
			log.Print(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err,
			})
		}
		c.JSON(http.StatusOK, gin.H{
			"message": task,
		})
	}
}
