// Link.react.test.js
import React from 'react';
import Standard from '../src/lib/js/components/molecules/standard';
import Compact from '../src/lib/js/components/molecules/compact';
import ModernCompact from '../src/lib/js/components/molecules/modern_compact';
import ModernStandard from '../src/lib/js/components/molecules/modern_standard';
import InlineCompact from '../src/lib/js/components/molecules/inline_compact';
import renderer from 'react-test-renderer';
import {componentData} from './testData';

test('Standard Enabled', () => {
  const component = renderer.create(
    <Standard
      heading= "Test"
      events= {componentData.events}
      filterby= "group"
      hidedescription = 'false'
      truncatedescription = '250'
      hideimages = 'false'
      hideaddcal = 'false'
      wrapperClassArray = {[]}
      listClassArray = {[]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Standard Enabled', () => {
  const component = renderer.create(
    <Compact
      heading= "Test"
      events= {componentData.events}
      filterby= "none"
      wrapperClassArray = {[]}
      listClassArray = {[]}
      hidedescription = 'true'
      truncatedescription = '150'
      hideimages = 'true'
      hideaddcal = 'true'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('odernStandard Enabled', () => {
  const component = renderer.create(
    <ModernStandard
      heading= "Test"
      events= {componentData.events}
      filterby= "type"
      wrapperClassArray = {[]}
      listClassArray = {[]}
      hidedescription = 'false'
      truncatedescription = '250'
      hideimages = 'false'
      hideaddcal = 'false'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ModernCompact Enabled', () => {
  const component = renderer.create(
    <ModernCompact
      heading= "Test"
      events= {componentData.events}
      filterby= "dept"
      wrapperClassArray = {[]}
      listClassArray = {[]}
      hidedescription = 'false'
      truncatedescription = '150'
      hideimages = 'false'
      hideaddcal = 'false'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('InlineCompact Enabled', () => {
  const component = renderer.create(
    <InlineCompact
      heading= "Test"
      events= {componentData.events}
      filterby= "none"
      wrapperClassArray = {[]}
      listClassArray = {[]}
      hidedescription = 'false'
      truncatedescription = '150'
      hideimages = 'false'
      hideaddcal = 'false'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
