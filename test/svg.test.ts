import { describe, it, expect } from '@jest/globals';
import { material_action_123_filled, material_action_123_outlined } from "../src";

describe('Action', function () {
    it('drag_indicator', function () {
        let icon = material_action_123_filled()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.getAttribute('icon')).toEqual('action_123');
        expect(icon.getAttribute('type')).toEqual('rounded');
    });
    it('accessible', function () {
        let icon = material_action_123_outlined()
        expect(icon).toBeInstanceOf(SVGElement);
        expect(icon.getAttribute('icon')).toEqual('action_123');
        expect(icon.getAttribute('type')).toEqual('filled');
    });

});