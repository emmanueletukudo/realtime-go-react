package main

import "time"

type Event struct{
	ID string `json:"id"`
	CreatedAt time.Time `json:"createdAt"`
	DeadlineMS int64 `json:"deadlineMs"`
	ProcessedAt *time.Time `json:"processedAt,omitempty"`
	Status string `json:"status"`
}