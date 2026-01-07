package main

import (
	"time"

	"github.com/google/uuid"
	
)


func startGenerator (out chan<- Event) { 
	ticker := time.NewTicker(50 * time.Millisecond);
	defer ticker.Stop()

	for range ticker.C {
		event:= Event {
			ID: uuid.New().String(),
			CreatedAt: time.Now(),
			DeadlineMS: 50,
		}

		select{
		case out <- event: 
		default:
		}
	}

}