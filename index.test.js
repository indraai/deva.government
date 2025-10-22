"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:15289402781373807475 LICENSE.md

const {expect} = require('chai')
const FBIDeva = require('./index.js');

describe(FBIDeva.me.name, () => {
  beforeEach(() => {
    return FBIDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(FBIDeva).to.be.an('object');
    expect(FBIDeva).to.have.property('agent');
    expect(FBIDeva).to.have.property('vars');
    expect(FBIDeva).to.have.property('listeners');
    expect(FBIDeva).to.have.property('methods');
    expect(FBIDeva).to.have.property('modules');
  });
})
