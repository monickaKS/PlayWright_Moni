# Automation Monicka - Node.js Hello World

A simple Node.js hello world project with Jenkins CI/CD pipeline.

## Project Structure

```
├── server.js              # Simple HTTP server
├── index.js              # Main entry point
├── package.json          # Project dependencies and scripts
└── Jenkinsfile          # Jenkins CI/CD pipeline
```

## Installation

```bash
npm install
```

## Running the Application

Start the HTTP server:

```bash
npm start
```

The server will run on `http://localhost:3000`

Available endpoints:
- `GET /` - Returns "Hello World!"
- `GET /json` - Returns JSON response with timestamp

### Environment Variables

Set the `PORT` environment variable to run on a different port:

```bash
PORT=8080 npm start
```

## Jenkins Pipeline

The project includes a Jenkinsfile for CI/CD automation. The pipeline:
1. Checks out the code
2. Installs dependencies
3. Builds the application

To use with Jenkins:
1. Create a new Pipeline job
2. Link to this repository
3. Set the pipeline script path to `Jenkinsfile`

## Technologies

- **Node.js** - JavaScript runtime
- **Jenkins** - CI/CD pipeline

## License

ISC
