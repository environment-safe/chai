import * as chaiModule from 'chai';
import { isBrowser, isJsDom } from 'browser-or-node';
export const chai = (!(isBrowser || isJsDom))?chaiModule:window.chai;
export default chai;