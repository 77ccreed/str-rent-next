import type { Metadata } from 'next';

import fs from 'fs';
import path from 'path';
import md from 'markdown-it';

export const metadata: Metadata = {
  title: 'Terms and conditions',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/teenusetingimused/teenusetingimused.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="container max-w-3xl px-6 mx-auto mt-8 prose prose-lg prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
