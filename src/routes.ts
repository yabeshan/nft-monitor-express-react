import express, { Router } from "express";
import path from "path";
import fs from "fs";

import { 
  getVersion,
} from './controllers/dashboard.js'

import fileDirName from "./utils/file-dir-name.js"
if (!global.__dirname || !global.__filename) {
  fileDirName(import.meta);
}

const router = Router();

// =========== API ============
router.post("/api/version", getVersion);


// =========== DASHBOARD ============
const frontendRoutes = ['/', '/dashboard']
frontendRoutes.forEach((route) => {
  router.get(route, (_, res) => {
    fs.readFile(global.__dirname + '/index.html', 'utf8', (_, text) => {
      res.send(text)
    })
  })
})

// =========== STATIC ============
router.get('/static', (_, res) => {
  fs.readFile(global.__dirname + '/public/static.html', 'utf8', (_, text) => {
    res.send(text)
  })
}) 
router.get('*', express.static(path.join(global.__dirname, 'public')))

export default router;