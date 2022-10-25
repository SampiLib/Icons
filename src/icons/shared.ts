export function generateFunction(name: string, icon: string, width: number = 24, height: number = 24) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('type', name);
    svg.setAttribute('viewbox', "0 0 " + width + " " + height);
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.innerHTML = icon

    return function () {
        return <SVGSVGElement>svg.cloneNode(true);
    };
}