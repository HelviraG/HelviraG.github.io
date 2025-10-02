import serverless from "serverless-http";
import app from "../../server/index"; // path to your Express app

export const handler = serverless(app);