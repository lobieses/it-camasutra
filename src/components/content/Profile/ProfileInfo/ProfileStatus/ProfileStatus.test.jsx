import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('after creation status should be in the state', () => {
        const component = create(<ProfileStatus status={'ABOBA'}/>);
        const instance = component.getInstance();
        expect(instance.props.status).toBe('ABOBA');
    });
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'ABOBA'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBe(null);
    });
    test('after creation input should\'nt be displayed', () => {
        const component = create(<ProfileStatus status={'ABOBA'}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test('after creation span should be have correct status', () => {
        const component = create(<ProfileStatus status={'ABOBA'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('ABOBA');
    });
    test('after creation input should be displayed in editMode', () => {
        const component = create(<ProfileStatus status={'ABOBA'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('ABOBA');
    });
    test('callback function should be called', () => {
        let mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'ABOBA'} updateStatus={mockCallback}/>);
        const instanse = component.getInstance();
        instanse.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});