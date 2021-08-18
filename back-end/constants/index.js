export const SERVER_PORT = 3030;


// DB path used in docker container
const DB_PATH_DOCKER = process.env.DB_DOCKER;

// Select DB path depending on availability of env variable from docker
export const DB_PATH = DB_PATH_DOCKER || "mongodb://localhost:27017";
