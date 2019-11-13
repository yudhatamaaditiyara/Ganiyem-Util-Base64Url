/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const {pad, escape, unescape, encode, decode} = require('../../');

let soekarnoQuoteDecoded = 'Gantungkan cita-cita mu setinggi langit! Bermimpilah setinggi langit. Jika engkau jatuh, engkau akan jatuh di antara bintang-bintang.';
let soekarnoQuoteEncoded = 'R2FudHVuZ2thbiBjaXRhLWNpdGEgbXUgc2V0aW5nZ2kgbGFuZ2l0ISBCZXJtaW1waWxhaCBzZXRpbmdnaSBsYW5naXQuIEppa2EgZW5na2F1IGphdHVoLCBlbmdrYXUgYWthbiBqYXR1aCBkaSBhbnRhcmEgYmludGFuZy1iaW50YW5nLg';

describe('index', () => {
  it('must be typeof pad === "function"', () => {
    assert.ok(typeof pad === 'function');
  });

  it('must be typeof escape === "function"', () => {
    assert.ok(typeof escape === 'function');
  });

  it('must be typeof unescape === "function"', () => {
    assert.ok(typeof unescape === 'function');
  });

  it('must be typeof encode === "function"', () => {
    assert.ok(typeof encode === 'function');
  });

  it('must be typeof decode === "function"', () => {
    assert.ok(typeof decode === 'function');
  });

  it('must be pad("a") === "a==="', () => {
    assert.strictEqual(pad('a'), 'a===');
  });

  it('must be pad("ab") === "ab=="', () => {
    assert.strictEqual(pad('a'), 'a===');
  });

  it('must be pad("abc") === "abc="', () => {
    assert.strictEqual(pad('abc'), 'abc=');
  });

  it('must be pad("abcd") === "abcd"', () => {
    assert.strictEqual(pad('abcd'), 'abcd');
  });

  it('must be pad("abcde") === "abcde==="', () => {
    assert.strictEqual(pad('abcde'), 'abcde===');
  });

  it('must be escape("+/=") === "-_"', () => {
    assert.strictEqual(escape('+/='), '-_');
  });

  it('must be unescape("-_") === "+/=="', () => {
    assert.strictEqual(unescape('-_'), '+/==');
  });

  it('must be encode("foo") === "Zm9v"', () => {
    assert.strictEqual(encode('foo'), 'Zm9v');
  });

  it('must be decode("Zm9v") === "foo"', () => {
    assert.strictEqual(decode('Zm9v'), 'foo');
  });

  it('must be encode(soekarnoQuoteDecoded) === soekarnoQuoteEncoded', () => {
    assert.strictEqual(encode(soekarnoQuoteDecoded), soekarnoQuoteEncoded);
  });

  it('must be decode(soekarnoQuoteEncoded) === soekarnoQuoteDecoded', () => {
    assert.strictEqual(decode(soekarnoQuoteEncoded), soekarnoQuoteDecoded);
  });
});