import * as bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
// @ts-ignore
import express, { Express, Request, Response } from "express";
import * as fs from "node:fs";
import * as path from "path";

dotenv.config();

const app: Express = express();
app.use(express.json());

const bufferFile = (relPath: string) => {
  return fs.readFileSync(path.join(__dirname, relPath), { encoding: "utf-8" });
};

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/public")));

app.get("/api/getConfs", async (req: Request, res: Response) => {
  const params = {
    Key: "./database/app/conferences.json",
  };

  fs.readFile(params.Key, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.get("/api/getCareer", async (req: Request, res: Response) => {
  const params = {
    Key: "./database/app/career.json",
  };

  fs.readFile(params.Key, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.get("/api/getPress", async (req: Request, res: Response) => {
  const params = {
    Key: "./database/app/press.json",
  };

  fs.readFile(params.Key, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.get("/api/getVideos", async (req: Request, res: Response) => {
  const params = {
    Key: "./database/app/videos.json",
  };

  fs.readFile(params.Key, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.get("/api/getPassion", async (req: Request, res: Response) => {
  const lang = req.query.lang?.toString().toUpperCase() ?? "EN";

  const params = {
    Key: `./database/quizz/fallout_${lang}.json`,
  };

  fs.readFile(params.Key, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.post("/api/postResult", async (req: Request, res: Response) => {
  const filePath = "./database/quizz/results.json";

  // Read the existing file
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }

    try {
      let fileObject: { results: any };

      // Check if the file is empty or not valid JSON
      if (!data.trim()) {
        fileObject = { results: [] };
      } else {
        fileObject = JSON.parse(data);
      }

      // Ensure results array exists
      if (!fileObject.results) {
        fileObject.results = [];
      }

      // Get request body instead of query params
      const reqObj = req.body;

      // Append new data
      fileObject.results.push(reqObj);

      // Convert to JSON
      const updatedJson = JSON.stringify(fileObject, null, 4);

      // Write back to file
      fs.writeFile(filePath, updatedJson, (err) => {
        if (err) {
          return res.status(500).json({ message: "Error writing JSON file" });
        }
        console.log("Updated JSON:", updatedJson);
        return res.json(fileObject);
      });
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return res.status(500).json({ message: "Error parsing JSON file" });
    }
  });
});

app.get("/*", (req: Request, res: Response) => {
  res.send("./client/public/index.html");
});

const port = process.env.PORT || 8000;

app.listen(port);

console.log(`Server is running on port ${port}`);
