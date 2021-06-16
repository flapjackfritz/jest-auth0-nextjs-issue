module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: { components: './components', lib: './lib', pages: './pages' },
      },
    ],
  ],
};
