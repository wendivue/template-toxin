function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../../src/', true, /\.(png|jpe?g|gif|svg)$/i));
