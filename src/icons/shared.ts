export function generateFunction(name: string, type: string, icon: string) {
    let svg = <SVGSVGElement>(new DOMParser().parseFromString(icon, 'image/svg+xml')).firstChild;
    svg.setAttribute('icon', name);
    svg.setAttribute('type', type);

    return function () {
        return <SVGSVGElement>svg.cloneNode(true);
    };
}