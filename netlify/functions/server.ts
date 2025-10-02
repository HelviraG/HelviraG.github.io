import ServerlessHttp from "serverless-http";
import app from "../../server/index";

export const handler = ServerlessHttp(app);