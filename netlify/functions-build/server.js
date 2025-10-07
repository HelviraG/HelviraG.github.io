"use strict";
import serverless from "serverless-http";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import * as path from "path";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, query, getDocs, where } from "firebase/firestore";
import { join } from "path";
dotenv.config();
const app = express();
app.use(express.json());
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/api/getConfs", (req, res) => {
  res.sendFile(join(process.cwd(), "database/app/conferences.json"));
});
app.get("/api/getCareer", (req, res) => {
  res.sendFile(join(process.cwd(), "database/app/career.json"));
});
app.get("/api/getPress", (req, res) => {
  res.sendFile(join(process.cwd(), "database/app/press.json"));
});
app.get("/api/getVideos", (req, res) => {
  res.sendFile(join(process.cwd(), "database/app/videos.json"));
});
app.get("/api/getPassion", (req, res) => {
  const lang = req.query.lang?.toString().toUpperCase() ?? "EN";
  if (lang === "FR") {
    return res.sendFile(join(process.cwd(), "database/app/falloutFR.json"));
  }
  return res.sendFile(join(process.cwd(), "database/app/falloutEN.json"));
  ;
});
app.post("/api/postResult", async (req, res) => {
  const { category, type } = req.body;
  if (!category || !type) {
    return res.status(400).json({ message: "Missing category or type" });
  }
  await addDoc(
    collection(db, "fallout-passion-test"),
    {
      category,
      type
    }
  );
  res.status(200).json({ message: "Result added successfully" });
});
app.get("/api/getResults", async (req, res) => {
  try {
    const { category } = req.query;
    let q = query(collection(db, "fallout-passion-test"));
    if (category) {
      q = query(collection(db, "fallout-passion-test"), where("category", "==", category));
    }
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    const counts = {};
    results.forEach((r) => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    const total = results.length;
    const factions = ["citizen", "paladin", "superMutant"];
    const percentages = {};
    factions.forEach((f) => {
      percentages[f] = total > 0 ? (counts[f] || 0) / total * 100 : 0;
    });
    res.status(200).json({ total, counts, percentages, results });
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ error: "Failed to fetch results" });
  }
});
app.get((req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});
export const handler = serverless(app);
