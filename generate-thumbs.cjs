import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Define your input and output folders
const inputFolder = path.join(__dirname, 'src', 'assets', 'projectsimg');
const outputFolder = path.join(__dirname, 'src', 'assets', 'projectsimg', 'thumbnails');

// 3. Create the thumbnails folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
    console.log('📁 Created thumbnails folder.');
}

// 4. Process the images
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error("❌ Could not read the directory. Check your inputFolder path.", err);
        process.exit(1);
    }

    files.forEach((file) => {
        const inputPath = path.join(inputFolder, file);

        // Skip directories and hidden files (like .DS_Store)
        if (file.startsWith('.') || fs.lstatSync(inputPath).isDirectory()) {
            return;
        }

        const parsedPath = path.parse(file);
        // Save as a WebP file for maximum compression
        const outputPath = path.join(outputFolder, `${parsedPath.name}-thumb.webp`);

        // 5. Resize and compress
        sharp(inputPath)
            .resize({ width: 300 }) // Resizes to 300px wide
            .webp({ quality: 80 })  // Converts to WebP at 80% quality
            .toFile(outputPath)
            .then(() => console.log(`✅ Success: ${parsedPath.name}-thumb.webp`))
            .catch(err => console.error(`❌ Error processing ${file}:`, err.message));
    });
});