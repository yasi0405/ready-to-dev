import {compileMDX} from 'next-mdx-remote/rsc';

const components = {
  a: (props: React.ComponentProps<'a'>) => <a {...props} className="article-link" />,
  h2: (props: React.ComponentProps<'h2'>) => <h2 {...props} />,
  h3: (props: React.ComponentProps<'h3'>) => <h3 {...props} />,
  p: (props: React.ComponentProps<'p'>) => <p {...props} />,
  ul: (props: React.ComponentProps<'ul'>) => <ul {...props} />,
  ol: (props: React.ComponentProps<'ol'>) => <ol {...props} />,
  li: (props: React.ComponentProps<'li'>) => <li {...props} />
};

export async function renderMDX(source: string) {
  const {content} = await compileMDX({
    source,
    components,
    options: {parseFrontmatter: false}
  });

  return content;
}
