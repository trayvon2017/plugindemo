module.exports = () => {
  return new Promise(resolve => {
      const start = Date.now();
      setTimeout(() => resolve(Date.now() - start), 1000);
  }).then(msWaited => {
      console.log(`after_plugin_rm waited ${msWaited} ms`);
  });
};