// @ts-ignore
import { default as fileDialog } from "node-file-dialog"
import * as fs from "fs"
import { generateName, generateSVG } from "./shared"

(async () => {
    //Creating streams for files
    try {
        var path = await <Promise<string[]>>fileDialog({ type: 'directory' });
    } catch (error) {
        console.log('Nothing Selected');
        return;
    }

    let sourcePath = path[0] + '\\src';

    let writePath = './src/icons/material/'
    //Creating write stream for material
    let materialIndexStream = fs.createWriteStream(writePath + 'index.ts');
    //Reading directory
    let dir1 = fs.readdirSync(sourcePath);
    let exportString = 'export {\n'
    for (const path of dir1) {
        //Writing category to index
        materialIndexStream.write(`import * as ${generateName(path)} from "./${path}"
`);
        exportString += `   ${generateName(path)},
`        //Creating write stream for category
        let writeCategoryPath = writePath + path + '/';
        fs.mkdirSync(writeCategoryPath, { recursive: true });
        let categoryindexStream = fs.createWriteStream(writeCategoryPath + 'index.ts');
        //Reading icon directories
        let categoryPath = sourcePath + '\\' + path;
        let dir2 = fs.readdirSync(categoryPath);
        let categoryExportString = 'export {\n'
        for (const path2 of dir2) {
            let iconName = generateName(path2);
            //Writing icon to index
            categoryindexStream.write(`import * as ${iconName} from "./${path2}"
`);
            categoryExportString += `   ${iconName},
`
            let iconPath = categoryPath + '\\' + path2;
            let iconStream = fs.createWriteStream(writeCategoryPath + path2 + '.ts');
            iconStream.write('import { generateFunction } from "../../shared";\n');
            let filledFile = ''
            let outlinedFile = ''
            let roundedFile = ''
            let sharpFile = ''
            let twotoneFile = ''
            try { filledFile = fs.readFileSync(iconPath + '\\materialicons\\24px.svg').toString(); } catch { }
            try { outlinedFile = fs.readFileSync(iconPath + '\\materialiconsoutlined\\24px.svg').toString(); } catch { }
            try { roundedFile = fs.readFileSync(iconPath + '\\materialiconsround\\24px.svg').toString(); } catch { }
            try { sharpFile = fs.readFileSync(iconPath + '\\materialiconssharp\\24px.svg').toString(); } catch { }
            try { twotoneFile = fs.readFileSync(iconPath + '\\materialiconstwotone\\24px.svg').toString(); } catch { }
            if (filledFile) {
                iconStream.write(generateSVG(filledFile, iconName, iconName.replace('_', ''), 'filled', 'filled', ''));
            }
            if (outlinedFile) {
                iconStream.write(generateSVG(outlinedFile, iconName, iconName.replace('_', ''), 'outlined', 'outlined', ''));
            }
            if (roundedFile) {
                iconStream.write(generateSVG(roundedFile, iconName, iconName.replace('_', ''), 'rounded', 'rounded', ''));
            }
            if (sharpFile) {
                iconStream.write(generateSVG(sharpFile, iconName, iconName.replace('_', ''), 'sharp', 'sharp', ''));
            }
            if (twotoneFile) {
                iconStream.write(generateSVG(twotoneFile, iconName, iconName.replace('_', ''), 'twotone', 'twotone', ''));
            }
            iconStream.end();
            iconStream.close();
        }
        categoryindexStream.write(categoryExportString + '}');
        categoryindexStream.end();
        categoryindexStream.close();
    }
    materialIndexStream.write(exportString + '}');
    materialIndexStream.end();
    materialIndexStream.close();

})()
