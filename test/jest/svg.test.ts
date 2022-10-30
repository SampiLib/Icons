import { describe, it, expect } from '@jest/globals';
import * as svg from "../../src/index";

describe('Action', function () {
    it('drag_indicator', function () {
        let icon = svg.material.action.drag_indicator.rounded()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.getAttribute('icon')).toEqual('drag_indicator');
        expect(icon.getAttribute('type')).toEqual('rounded');
    });
    it('accessible', function () {
        let icon = svg.material.action.accessible.filled()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.getAttribute('icon')).toEqual('accessible');
        expect(icon.getAttribute('type')).toEqual('filled');
    });

});