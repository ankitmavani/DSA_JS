const fs = require('fs');
const path = require('path');

const basePath = './Basic_program';

function trackProgress() {
  let total = 0;
  let completed = 0;

  const folders = fs
    .readdirSync(basePath)
    .filter((f) => fs.statSync(path.join(basePath, f)).isDirectory())
    .sort();

  folders.forEach((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath).sort();

    files.forEach((file) => {
      const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');

      total++;
      if (content.includes('Status: ✅')) completed++;
    });
  });

  const percent = ((completed / total) * 100).toFixed(2);

  console.log('\n📊 DSA Progress');
  console.log(`✅ Completed: ${completed}`);
  console.log(`📁 Total: ${total}`);
  console.log(`📈 Progress: ${percent}%\n`);
}

trackProgress();
