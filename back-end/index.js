import LoadDataBase from "./loaders/db.js"
import LoadServer from "./loaders/server.js"
import {DB_PATH, SERVER_PORT} from "./constants/index.js"

LoadDataBase(DB_PATH)
LoadServer(SERVER_PORT)
