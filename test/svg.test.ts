import { describe, it, expect } from '@jest/globals';
import * as svg from "../src/index";

describe('Action', function () {
    it('drag_indicator', function () {
        let icon = svg.drag_indicator()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.classList.contains('icon')).toBeTruthy();
        expect(icon.getAttribute('type')).toEqual('drag_indicator');
    });
    it('hourglass_disabled', function () {
        let icon = svg.hourglass_disabled()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.classList.contains('icon')).toBeTruthy();
        expect(icon.getAttribute('type')).toEqual('hourglass_disabled');
    });

    it('all the rest', function () {
        for (const key in <{ [key: string]: () => SVGSVGElement }>svg) {
            if (Object.prototype.hasOwnProperty.call(svg, key)) {
                const element: () => SVGSVGElement = svg[key];

            }
        }
    });

});