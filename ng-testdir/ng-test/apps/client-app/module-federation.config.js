module.exports = {
  name: 'client-app',
  exposes: {
    './Module': 'apps/client-app/src/app/remote-entry/entry.module.ts',
  },
};
