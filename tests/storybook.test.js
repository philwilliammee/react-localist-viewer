import initStoryshots from "@storybook/addon-storyshots";
initStoryshots({
  // Maybe replace the mdx file or use ts mdx importer
  // for now ignore this error: Unexpected error while loading ./stories/Introduction.stories.mdx: SyntaxError: Cannot use import statement outside a module
  storyKindRegex: /^((?!.*?Introduction).)*$/,
});
