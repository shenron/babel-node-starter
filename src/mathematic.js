// @flow

import log from './decorators/log';

export default class mathematic {
  @log('some tag')
  static add(value: number, value2: number): number {
    return value + value2;
  }
}
