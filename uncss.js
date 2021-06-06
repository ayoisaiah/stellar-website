const uncss = require('uncss');
const fs = require('fs');

const files = ['index.html'];

uncss(files, (err, output) => {
  try {
    if (err) throw err;

    // update the css file
    fs.writeFile('styles.css', output, (err) => {
      if (err) throw err;
      console.log('uncss: done!');
    });
  } catch (err) {
    console.error(err);
  }
});
