/**
 * @jest-environment jsdom
 */
// Link.react.test.js
import React from "react";
import Standard from "../src/lib/js/components/molecules/Standard";
import ModernCompact from "../src/lib/js/components/molecules/ModernCompact";
import ModernStandard from "../src/lib/js/components/molecules/ModernStandard";
import InlineCompact from "../src/lib/js/components/molecules/InlineCompact";
import renderer from "react-test-renderer";
import { componentData } from "./testData";
// import Calendar from "../src/lib/js/components/molecules/Calendar";
// import { QueryClient, QueryClientProvider } from "react-query";

beforeAll(() => {
  window.VarA = "foo";
  window.VarB = "bar";
  // window.queryClient = new QueryClient();
});

test("Standard Enabled", () => {
  const component = renderer.create(
    <Standard
      heading="Test"
      events={componentData.events}
      filterby="group"
      hidedescription="false"
      truncatedescription="250"
      hideimages="false"
      hideaddcal="false"
      wrapperClassArray={[]}
      listClassArray={[]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ModernStandard Enabled", () => {
  const component = renderer.create(
    <ModernStandard
      heading="Test"
      events={componentData.events}
      filterby="type"
      wrapperClassArray={[]}
      listClassArray={[]}
      hidedescription="false"
      truncatedescription="250"
      hideimages="false"
      hideaddcal="false"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ModernCompact Enabled", () => {
  const component = renderer.create(
    <ModernCompact
      heading="Test"
      events={componentData.events}
      filterby="dept"
      wrapperClassArray={[]}
      listClassArray={[]}
      hidedescription="false"
      truncatedescription="150"
      hideimages="false"
      hideaddcal="false"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("InlineCompact Enabled", () => {
  const component = renderer.create(
    <InlineCompact
      heading="Test"
      events={componentData.events}
      filterby="none"
      wrapperClassArray={[]}
      listClassArray={[]}
      hidedescription="false"
      truncatedescription="150"
      hideimages="false"
      hideaddcal="false"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * The render can not be parsed out of react-query no clear path to use jest with react-render
 * https://react-query.tanstack.com/guides/testing
 * @todo test child components of calendar.
 */
// test("Calendar Enabled", () => {
//   const component = renderer.create(
//     <Calendar
//       heading="Calendar Test"
//       events={componentData.events}
//       filterby="none"
//       wrapperClassArray={[]}
//       listClassArray={[]}
//       hidedescription="false"
//       truncatedescription="250"
//       hideimages="false"
//       hideaddcal="true"
//       hidepagination="true"
//     />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
