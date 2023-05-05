"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = exports.withMatcher = void 0;
/**
 *
 * @param actionCreator {Function} a function that return {type: string, payload: any}
 * @returns object {type: string, match: Function} with Matchable Type
 */
function withMatcher(actionCreator) {
    var type = actionCreator().type;
    return Object.assign(actionCreator, {
        type: type,
        match: function (action) {
            return action.type === type;
        },
    });
}
exports.withMatcher = withMatcher;
function createAction(type, payload) {
    return {
        type: type,
        payload: payload,
    };
}
exports.createAction = createAction;
