import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>💙 LETS GROW !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to LETS GROW!" />
        <p className="description">
          Lets GROW est la référence des ressources : bonnes pratiques dans le domaine du Growth Hacking et de l&apos;entrepreneuriat au sens large.
        </p>
        <p className="description">
          Nous aidons gratuitement les entrepreneurs, growth hackers et commerciaux pour obtenir tout le nécessaire pour booster leur croissance.
        </p>
         <p className="description">
          Qu&apos;il s&apos;agisse de novices ou de profils chevronnés, nous alimentons chaque jour une base de :
         </p>
       
        <p className="description">Des centaines de <a href="https://sales-hacking.com/growth-hacks" target="_blank">growth hacks</a> enrichis CHAQUE JOUR</p>
        <p className="description">Près de 100 <a href="https://www.sales-hacking.com/growth-ressources">ressources pour entrepreneurs</a> téléchargeables</p>
        <p className="description">
          100 articles de blog autour du <a href="https://www.sales-hacking.com/blog-categories/growth-hacking">growth hacking</a>, de <a href="https://www.sales-hacking.com/blog-categories/seo-content-marketing">content marketing</a>, de techniques pour les Sales, du <a href="https://www.sales-hacking.com/blog-categories/web-scraping">Web scraping</a>, de Lead Generation et de l&apos;entrepreneuriat en général,
        </p>
        <p className="description">
          Des conseils de lecture avec <a href="https://www.sales-hacking.com/livres">le meilleur des livres business</a>
        </p>
        <p className="description">
          Des applications SaaS
        </p>
    
        <a href="https://twitter.com/StephenMesnild1?ref_src=twsrc%5Etfw" 
          class="twitter-follow-button" 
          data-show-count="false">Follow @StephenMesnild1
        </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
      </main>

      <Footer />
    </div>
  )
}
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
