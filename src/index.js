function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../src', true, /\.(js|s?css|png|jpe?g|gif|svg)$/i));
