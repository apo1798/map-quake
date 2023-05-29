import { readMarkdown } from '@/src/utils/readMd';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata: Metadata = {
  title: '關於 MapQuake 地震地圖',
};

const AboutPage = async () => {
  const files = await readMarkdown();

  return (
    <div className='container'>
      <main className='prose prose-lg mx-auto mb-12 mt-8 max-w-3xl rounded-md px-6 py-3 shadow-md dark:prose-invert dark:shadow-slate-100'>
        {files.map((file, i) => {
          return (
            <>
              <div key={file.fileName}>
                {/* @ts-expect-error */}
                <MDXRemote
                  source={file.content}
                  components={{
                    a: (props) => (
                      <a {...props} target='_blank' rel='noopenner noreferer' />
                    ),
                  }}
                />
              </div>

              {i + 1 < files.length && <hr className='my-2 border-amber-400' />}
            </>
          );
        })}
      </main>
    </div>
  );
};
export default AboutPage;
