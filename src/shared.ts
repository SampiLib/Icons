
interface GenerateFunction {
    (this: { buffer: SVGElement }): SVGElement;
}

export class SVGGenerator {
    private svgdddd: number;

    constructor(name: string, icon: string, width: number = 24, height: number = 24) {
        //this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svgdddd = 11;
    }

    generate() {
        return this.svgdddd;
    }
}

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

// export let icons = new class Icons {
//     categories: {}

//     constructor() {
//         this.categories = { $icons$: {}, $name$: 'icons' }
//     }

//     /**
//      * @param category 
//      * @param  name 
//      * @param  icon 
//      * @param  width 
//      * @param  height */
//     registerIcon(category: string[], name: string, icon: string, width: number = 24, height: number = 24) {
//         if (name.includes('/')) {
//             console.warn('Icon name must not contain /');
//             return;
//         }
//         let path = [this.categories];

//         let div = document.createElement('div');
//         div.innerHTML = '<svg class="icon" type="' + name + '" viewbox="0 0 ' + width + ' ' + height + '" width=' + width + ' height=' + height + '>' + icon + '</svg>';
//         if (div.firstChild instanceof SVGElement) {
//             let svg = div.firstChild;
//             return function () {
//                 return svg.cloneNode(true);
//             };
//         } else {
//             console.warn('Failed while generating ' + name + ' icon');
//         }
//     }
// }