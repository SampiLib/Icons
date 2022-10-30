

export function generateName(fileName: string) {
    let name = fileName.replace('.svg', '');
    let varName = name.replace(/(\d+)/g, '_$1')
    try {
        eval(`let ${varName}`)
    } catch {
        varName = '_' + varName;
    }
    return varName
}


export function generateSVG(fileString: string, name: string, describe: string, exportName: string, type: string, alias: string) {
    if (alias) {
        return `
//Generates ${describe} icon
export let ${exportName} = ${alias}
`
    } else {
        return `
//Generates ${describe} icon
export let ${exportName} = generateFunction('${name}', '${type}', '${fileString}');
`
    }
}