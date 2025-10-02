"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
// @ts-ignore
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("node:fs"));
const path = __importStar(require("path"));
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const fireBaseApp = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(fireBaseApp);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use(express_1.default.static(path.join(__dirname, "../../client/build")));
app.get("/.netlify/functions/getConfs", async (req, res) => {
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
app.get("/api/getCareer", async (req, res) => {
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
app.get("/api/getPress", async (req, res) => {
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
app.get("/api/getVideos", async (req, res) => {
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
app.get("/api/getPassion", async (req, res) => {
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
app.post("/api/postResult", async (req, res) => {
    const { category, type } = req.body;
    if (!category || !type) {
        return res.status(400).json({ message: "Missing category or type" });
    }
    await (0, firestore_1.addDoc)((0, firestore_1.collection)(db, "fallout-passion-test"), {
        category: category,
        type: type
    });
    res.status(200).json({ message: "Result added successfully" });
});
app.get("/api/getResults", async (req, res) => {
    try {
        const { category } = req.query;
        let q = (0, firestore_1.query)((0, firestore_1.collection)(db, "fallout-passion-test"));
        if (category) {
            q = (0, firestore_1.query)((0, firestore_1.collection)(db, "fallout-passion-test"), (0, firestore_1.where)("category", "==", category));
        }
        const querySnapshot = await (0, firestore_1.getDocs)(q);
        const results = querySnapshot.docs.map((doc) => doc.data());
        // 🔹 Count factions
        const counts = {};
        results.forEach((r) => {
            counts[r.type] = (counts[r.type] || 0) + 1;
        });
        // 🔹 Turn into percentages
        const total = results.length;
        const factions = ["citizen", "paladin", "superMutant"];
        const percentages = {};
        factions.forEach((f) => {
            const count = counts[f] || 0;
            percentages[f] = total > 0 ? (count / total) * 100 : 0;
        });
        res.status(200).json({ total, counts, percentages, results });
    }
    catch (error) {
        console.error("Error fetching results:", error);
        res.status(500).json({ error: "Failed to fetch results" });
    }
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});
exports.default = app;
