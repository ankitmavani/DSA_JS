const fs = require('fs');
const path = require('path');

const basePath = './Basic_program';

function getProgress(files, folderPath) {
  let completed = 0;

  const list = files.sort().map((file) => {
    const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');

    const done = content.includes('Status: ✅');
    if (done) completed++;

    return { file, done };
  });

  return { completed, total: files.length, list };
}

function generateReadme() {
  let totalAll = 0;
  let completedAll = 0;

  let content = `# 🚀 DSA Progress Dashboard\n\n`;

  const folders = fs
    .readdirSync(basePath)
    .filter((f) => fs.statSync(path.join(basePath, f)).isDirectory())
    .sort();

  folders.forEach((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath).sort();

    const { completed, total, list } = getProgress(files, folderPath);

    totalAll += total;
    completedAll += completed;

    const percent = ((completed / total) * 100 || 0).toFixed(0);

    content += `## 📂 ${folder}\n`;
    content += `Progress: ${completed}/${total} (${percent}%)\n\n`;

    list.forEach((item) => {
      content += `- [${item.done ? 'x' : ' '}] ${item.file}\n`;
    });

    content += `\n`;
  });

  const overall = ((completedAll / totalAll) * 100 || 0).toFixed(0);

  content =
    `# 📊 Overall Progress\n\n` +
    `✅ ${completedAll}/${totalAll}\n\n` +
    `📈 ${overall}%\n\n` +
    `\`\`\`\n${'█'.repeat(overall / 10)}${'░'.repeat(
      10 - overall / 10,
    )} ${overall}%\n\`\`\`\n\n` +
    content;

  fs.writeFileSync(`${basePath}/README.md`, content);

  console.log('✅ README updated correctly');
}

generateReadme();
