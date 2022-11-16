export function generateSVG(name: string, path: [string, ...string[]], type: string, fileString: string) {
    return `
//Generates ${name} icon
export let ${path.join('_')}_${type} = generateFunction('${name}',${JSON.stringify(path)}, '${type}', '${fileString}');
`
}