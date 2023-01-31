export const siteTitle = 'Kickass Resume';

export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <title>{siteTitle}</title>
    </>
  );
}
