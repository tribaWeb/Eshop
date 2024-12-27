import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import browserSync from 'browser-sync';

// Necessary for __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);

 /** // Initialize BrowserSync after the server starts
  browserSync.init({
    proxy: `http://localhost:${PORT}`,
    files: [
      path.join(__dirname, 'views', '*.html'),
      path.join(__dirname, 'public', '*.css'),
      path.join(__dirname, 'public', '*.js'),
    ],
    open: false,
    port: 3001,
  });
}); 
