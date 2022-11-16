export interface SVGGenerator extends Function {
    (): SVGSVGElement;
    path: [string, ...string[]]
}

export function generateFunction(name: string, path: [string, ...string[]], type: string, icon: string) {
    let svg = <SVGSVGElement>(new DOMParser().parseFromString(icon, 'image/svg+xml')).firstChild;
    svg.setAttribute('icon', name);
    svg.setAttribute('type', type);

    let func = <SVGGenerator>function () {
        return <SVGSVGElement>svg.cloneNode(true);
    };
    func.path = path;
    return func;
}