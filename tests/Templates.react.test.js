// Link.react.test.js
import React from 'react';
import Classic from '../src/lib/js/components/molecules/classic';
import Standard from '../src/lib/js/components/molecules/standard';
import Compact from '../src/lib/js/components/molecules/compact';
import ModernCompact from '../src/lib/js/components/molecules/modern_compact';
import ModernStandard from '../src/lib/js/components/molecules/modern_standard';
import InlineCompact from '../src/lib/js/components/molecules/inline_compact';
import renderer from 'react-test-renderer';
import {componentData} from './testData';

test('Classic Enabled', () => {
  const component = renderer.create(
    <Classic
      heading= "Test"
      events= {componentData.events}
      filterby= "type"
      wrapperclass = "test wrapper"
      listclass = "test lists"
      itemclass = "test item"
      hidedescription = 'false'
      truncatedescription = '150'
      hideimages = 'false'
      hideaddcal = 'false'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Standard Enabled', () => {
  const component = renderer.create(
    <Standard
      heading= "Test"
      events= {componentData.events}
      filterby= "group"
      wrapperclass = "test wrapper"
      listclass = "test lists"
      itemclass = "test item"
      hidedescription = 'false'
      truncatedescription = '250'
      hideimages = 'false'
      hideaddcal = 'false'
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
      wrapperclass = "test wrapper"
      listclass = "test lists"
      itemclass = "test item"
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
      wrapperclass = "test wrapper"
      listclass = "test lists"
      itemclass = "test item"
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
      wrapperclass = ""
      listclass = ""
      itemclass = ""
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
      wrapperclass = "test wrapper"
      listclass = "test lists"
      itemclass = "test item"
      hidedescription = 'false'
      truncatedescription = '150'
      hideimages = 'false'
      hideaddcal = 'false'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
