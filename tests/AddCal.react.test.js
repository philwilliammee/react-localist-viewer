// Link.react.test.js
import React from 'react';
import AddCal from '../src/lib/js/components/molecules/addCal';
import renderer from 'react-test-renderer';
import {singleEvent} from './testData';

test('AddCal returns calendar links', () => {
  const component = renderer.create(
    <AddCal event={singleEvent} hideaddcal="false" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
