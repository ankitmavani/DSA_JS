const fs = require('fs');
const path = require('path');

const BASE_PATH = './Master_Logic_Building';

function progressBar(percent) {
  const total = 20;
  const filled = Math.round((percent / 100) * total);

  return '█'.repeat(filled) + '░'.repeat(total - filled);
}

function getFiles(folder) {
  return fs
    .readdirSync(folder)
    .filter((file) => fs.statSync(path.join(folder, file)).isFile())
    .sort();
}

function getProgress(folder) {
  const files = getFiles(folder);

  let completed = 0;

  const list = files.map((file) => {
    const fullPath = path.join(folder, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    const done = content.includes('Status     : ✅');

    if (done) completed++;

    return {
      file,
      done,
    };
  });

  return {
    total: files.length,
    completed,
    list,
  };
}

function generateReadme() {
  let totalProblems = 0;
  let solvedProblems = 0;

  let markdown = `# 🚀 Master Logic Building Progress\n\n`;

  const phases = fs
    .readdirSync(BASE_PATH)
    .filter((dir) => fs.statSync(path.join(BASE_PATH, dir)).isDirectory())
    .sort();

  phases.forEach((phase) => {
    markdown += `# 📂 ${phase}\n\n`;

    const phasePath = path.join(BASE_PATH, phase);

    let phaseTotal = 0;
    let phaseSolved = 0;

    const levels = fs
      .readdirSync(phasePath)
      .filter((dir) => fs.statSync(path.join(phasePath, dir)).isDirectory())
      .sort();

    levels.forEach((level) => {
      const levelPath = path.join(phasePath, level);

      const { total, completed, list } = getProgress(levelPath);

      phaseTotal += total;
      phaseSolved += completed;

      totalProblems += total;
      solvedProblems += completed;

      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

      markdown += `## ${level}\n\n`;

      markdown += `Progress : **${completed}/${total} (${percent}%)**\n\n`;

      markdown += `\`${progressBar(percent)}\`\n\n`;

      list.forEach((problem) => {
        markdown += `- [${problem.done ? 'x' : ' '}] ${problem.file}\n`;
      });

      markdown += '\n';
    });

    const phasePercent =
      phaseTotal === 0 ? 0 : Math.round((phaseSolved / phaseTotal) * 100);

    markdown += `### 📊 ${phase} Summary\n\n`;

    markdown += `Solved : **${phaseSolved}/${phaseTotal}**\n\n`;

    markdown += `\`${progressBar(phasePercent)} ${phasePercent}%\`\n\n`;

    markdown += '---\n\n';
  });

  const overallPercent =
    totalProblems === 0
      ? 0
      : Math.round((solvedProblems / totalProblems) * 100);

  const header = `# 📊 Overall Progress

**Solved:** ${solvedProblems}/${totalProblems}

**Completion:** ${overallPercent}%

\`${progressBar(overallPercent)} ${overallPercent}%\`

---

`;

  fs.writeFileSync(path.join(BASE_PATH, 'README.md'), header + markdown);

  console.log('✅ README updated successfully.');
}

generateReadme();
