const fs = require('fs');
const path = require('path');


// Directory where your images are stored
const imagesDir = path.join(__dirname, '../../Assets/Images/Gallery/Mobile/');

// Output file where import statements will be written
const outputFile = path.join(__dirname, 'importImages.js');

// Function to generate valid JavaScript variable names from filenames
const toValidVariableName = (filename) => {
    return filename.replace(/[^a-zA-Z0-9]/g, '_').replace(/^(\d)/, '_$1');
};

// Read all files from the images directory
fs.readdir(imagesDir, (err, files) => {
    if (err) {
        return console.error(`Unable to scan directory: ${err}`);
    }

    // Filter out non-image files
    const imageFiles = files.filter(file => /\.(png|jpe?g|gif|svg)$/.test(file));

    // Generate import statements
    const importStatements = imageFiles.map(file => {
        const variableName = toValidVariableName(path.basename(file, path.extname(file)));
        const importPath = `../../Assets/Images/Gallery/Mobile/${file}`;
        // return `import ${'Mobile'+variableName} from '${importPath}';`;
        return ` ${'Mobile'+variableName},`;
    }).join('\n');

    // Write import statements to the output file
    fs.writeFile(outputFile, importStatements, (err) => {
        if (err) {
            return console.error(`Unable to write file: ${err}`);
        }
        console.log(`Import statements written to ${outputFile}`);
    });
});
