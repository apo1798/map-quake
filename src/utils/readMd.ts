import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const mdDir = path.join(process.cwd(), 'md');

export const readMarkdown = async () => {
  const files = await Promise.all(
    fs.readdirSync(path.join(mdDir)).map(async (file) => {
      const fileName = file.replace('.mdx', '');
      const content = fs.readFileSync(path.join(mdDir, file), {
        encoding: 'utf-8',
      });

      const data = { fileName, content };
      return data;
    })
  );

  return files;
};
