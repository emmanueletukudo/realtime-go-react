package main

import (
	"context"
	"log"
	"time"
)


func processEvent (event Event) Event { 
	ctx, cancel := context.WithTimeout(
		context.Background(),
	time.Duration(event.DeadlineMS)*time.Millisecond,
	)
	defer cancel()

	workDone := make(chan struct{})

	go func() {
		time.Sleep(30 * time.Millisecond)
		close(workDone)
	}()

	select{
	case <- workDone: 
		now := time.Now()
		event.ProcessedAt = &now
		event.Status = "on-time"
	case <-ctx.Done():
		event.Status = "late"
	}

	log.Printf("New event processed: %v", event)

	return event
}