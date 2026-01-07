# Realtime Go + React

The backend implementation for the software real-time system using `Go` routine and `context.Context` to enforce deadline and back-pressure.

## Requirements

- Unix-like OS (macOS, Linux)
- Bash (or compatible shell)
- Go installed

## Installation

1. Run `go get` & `go mod tidy` to install the required dependencies
2. Clone the repo or place files in your project directory.
3. From the project root:
   - Ensure `run.sh` is present.

## Running the application

Make the launcher executable (only needed once):

```bash
chmod +x ./run.sh
```

Start the app:

```bash
./run.sh
```

Alternative if you prefer to run with a specific shell:

```bash
sh ./run.sh
# or
bash ./run.sh
```

## Common issues

- Permission denied: run `chmod +x ./run.sh`.

The application will be available at `http://localhost:8080`
Websocket URL: `http://localhost:8080/ws`

## License

Specify your project license (e.g., MIT).
