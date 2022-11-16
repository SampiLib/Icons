// @ts-ignore
import { default as fileDialog } from "node-file-dialog"
import * as fs from "fs"
import { generateSVG } from "./shared.js"

//Creating streams for files
try {
    var path = await <Promise<string[]>>fileDialog({ type: 'directory' });
} catch (error) {
    console.log('Nothing Selected');
    process.exit();
}
let sourcePath = path[0] + '\\src';
//Creating write stream for material
let materialStream = fs.createWriteStream('./src/material.ts');
materialStream.write('import { generateFunction } from "./shared";\n');
//Reading directory
let dir1 = fs.readdirSync(sourcePath);
for (const path of dir1) {
    //Reading icon directories
    let categoryPath = sourcePath + '\\' + path;
    materialStream.write(`
//######################################
//### ${path}
//######################################
`);
    let dir2 = fs.readdirSync(categoryPath);
    for (const path2 of dir2) {
        //Writing icon to index
        let iconPath = categoryPath + '\\' + path2;
        let file = ''
        let types = <{ [S: string]: string }>{ 'filled': '', 'outlined': 'outlined', 'rounded': 'rounded', 'sharp': 'sharp', 'twotone': 'twotone' };
        for (const key in types) {
            try { file = fs.readFileSync(iconPath + `\\materialicons${types[key]}\\24px.svg`).toString(); } catch { }
            if (file) {
                materialStream.write(generateSVG(path2, ['material', path, path2], key, file));
            }
        }
    }
}
materialStream.end();
materialStream.close();