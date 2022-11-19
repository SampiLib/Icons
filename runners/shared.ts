import { exec } from "child_process"
import { join } from "path"

export function generateSVG(name: string, path: [string, ...string[]], type: string, fileString: string) {
    return `
//Generates ${name} icon
export let ${path.join('_')}_${type} = generateFunction('${path.join('_')}_${type}',${JSON.stringify(path)}, '${fileString}');
`
}

export function fileDialog(config: { type: 'directory' | 'save-file' | 'open-file' | 'open-files' }) {
    var cmd = __dirname
    if (process.platform === 'win32') {
        cmd = join(cmd, 'dialog.exe');
    }
    switch (config.type) {
        case "directory":
            cmd += ' -d';
            break;

        case "save-file":
            cmd += ' -s';
            break;
        case "open-file":
            cmd += ' -o';
            break;
        case "open-files":
            cmd += ' -f';
            break;
    }
    return new Promise<string[]>((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (stdout) {
                if (stdout.trim() === 'None')
                    reject(new Error('Nothing selected'));
                else
                    resolve(stdout.trim().split('\n'))
            } else if (error) {
                reject(error);
            } else if (stderr) {
                reject(new Error(stderr));
            }
        });
    })
}