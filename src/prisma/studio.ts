import 'dotenv/config';
import { spawn } from 'node:child_process';
import os from 'node:os';

const databaseUrl = process.env['DATABASE_URL'];
if (!databaseUrl) {
  console.error('DATABASE_URL is not set in .env');
  process.exit(1);
}

const extraArgs = process.argv.slice(2).join(' ');
const urlRef = process.platform === 'win32' ? '"%DATABASE_URL%"' : '"$DATABASE_URL"';
const cmd = `npx -y prisma@7 studio --port 5555 --url ${urlRef} ${extraArgs}`.trim();

const child = spawn(cmd, {
  cwd: os.tmpdir(),
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, DATABASE_URL: databaseUrl },
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
