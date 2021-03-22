// Event Filter test
import React from "react";
// import { shallow } from 'enzyme';
import EventFilters from "../src/lib/js/components/organisms/EventFilterBy";
import FilterButton from "../src/lib/js/components/atoms/FilterButton";
import renderer from "react-test-renderer";
import { filterData } from "./testData";

test("Event filters Buttons", () => {
  let active = "";
  const mockCallBack = jest.fn();
  const component = renderer.create(
    <FilterButton
      filterId="thisid"
      active={active}
      name="test"
      clickHandler={mockCallBack}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick();
  expect(mockCallBack.mock.calls.length).toEqual(1);
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Event filters", () => {
  const mockCallBack = jest.fn();
  const component = renderer.create(
    <EventFilters
      filterObjs={filterData.filterObjs}
      events={filterData.events}
      handleEventFilter={mockCallBack}
      filterby={filterData.filterby}
      active="filterAll"
      setActive={() => {
        return "filterAll";
      }}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
