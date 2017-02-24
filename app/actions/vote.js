import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from '../types';

export function increment(id) {
  return { type: types.INCREMENT_COUNT };
}

export function decrement(id) {
  return { type: types.DECREMENT_COUNT };
}

