const fs = require('fs');
const path = require('path');

const BASE_PATH = './Master_Logic_Building';

function progressBar(percent) {
  const total = 20;
  const filled = Math.round((percent / 100) * total);

  return '█'.repeat(filled) + '░'.repeat(total - filled);
}

function trackProgress() {
  let totalProblems = 0;
  let solvedProblems = 0;

  const phases = fs
    .readdirSync(BASE_PATH)
    .filter((dir) => fs.statSync(path.join(BASE_PATH, dir)).isDirectory())
    .sort();

  console.log('\n==============================================');
  console.log('🚀 MASTER LOGIC BUILDING PROGRESS');
  console.log('==============================================\n');

  phases.forEach((phase) => {
    const phasePath = path.join(BASE_PATH, phase);

    let phaseTotal = 0;
    let phaseSolved = 0;

    const levels = fs
      .readdirSync(phasePath)
      .filter((dir) => fs.statSync(path.join(phasePath, dir)).isDirectory())
      .sort();

    console.log(`📂 ${phase}`);

    levels.forEach((level) => {
      const levelPath = path.join(phasePath, level);

      const files = fs
        .readdirSync(levelPath)
        .filter((file) => fs.statSync(path.join(levelPath, file)).isFile());

      let levelSolved = 0;

      files.forEach((file) => {
        const content = fs.readFileSync(path.join(levelPath, file), 'utf8');

        if (
          content.includes('Status     : ✅') ||
          content.includes('Status: ✅')
        ) {
          levelSolved++;
        }
      });

      const levelTotal = files.length;

      phaseSolved += levelSolved;
      phaseTotal += levelTotal;

      totalProblems += levelTotal;
      solvedProblems += levelSolved;

      const percent =
        levelTotal === 0 ? 0 : Math.round((levelSolved / levelTotal) * 100);

      console.log(
        `   ├── ${level.padEnd(45)} ${String(levelSolved).padStart(2)}/${String(levelTotal).padEnd(2)} ${progressBar(percent)} ${percent}%`,
      );
    });

    const phasePercent =
      phaseTotal === 0 ? 0 : Math.round((phaseSolved / phaseTotal) * 100);

    console.log(
      `   └── Phase Progress : ${phaseSolved}/${phaseTotal} (${phasePercent}%)`,
    );

    console.log('');
  });

  const overallPercent =
    totalProblems === 0
      ? 0
      : Math.round((solvedProblems / totalProblems) * 100);

  console.log('==============================================');
  console.log('📊 OVERALL');
  console.log('==============================================');

  console.log(`✅ Solved     : ${solvedProblems}`);
  console.log(`📁 Total      : ${totalProblems}`);
  console.log(`📈 Progress   : ${overallPercent}%`);
  console.log(progressBar(overallPercent));

  console.log('==============================================\n');
}

trackProgress();
