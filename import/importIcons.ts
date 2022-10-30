// @ts-ignore
import { default as fileDialog } from "node-file-dialog"
import * as fs from "fs"
import { generateSVG } from "./shared";

function readDir(path: string, stream: fs.WriteStream) {
    let dir = fs.readdirSync(path, { withFileTypes: true });
    for (let i = 0; i < dir.length; i++) {
        if (dir[i].isDirectory()) {
            readDir(path + '/' + dir[i].name, stream);
        } else if (dir[i].name.search(/^.*\.(svg)$/) != -1) {
            let file = fs.readFileSync(path + '/' + dir[i].name);
            stream.write(generateSVG(file.toString(), dir[i].name));
        }
    }
}

(async () => {
    try {
        var path = await <Promise<string[]>>fileDialog({ type: 'directory' });
    } catch (error) {
        console.log('Nothing Selected');
        return;
    }
    try {
        var outputPath = await <Promise<string[]>>fileDialog({ type: 'save-file' });
    } catch (error) {
        console.log('Nothing Selected');
        return;
    }
    if (outputPath[0].search(/\.ts$/m) == -1) {
        outputPath[0] += '.ts';
    }
    let stream = fs.createWriteStream(outputPath[0], {});
    stream.write('import { generateFunction } from "./shared";\n')
    for (let i = 0; i < path.length; i++) {
        readDir(path[i], stream);
    }
    stream.end();
})()
