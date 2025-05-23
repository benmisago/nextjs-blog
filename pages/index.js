import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';





 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
          <p> 
<br /> Welcome to my portfolio! <br />
</p>
          <p> 
          <br />
          I'm currently still in the process of designing this site.
      <p> </p>

      <p>
           I am excited to showcase my work, skills, and passion for emerging technology. Stay tuned—more coming soon!
      
         </p>
          </p>
      </section>



      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> Recent </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
          ))}
        </ul>

        I created this website using the tutorial from {' '}
<a href="https://nextjs.org/learn"> Next.js. </a> 

      </section>
        </Layout>
      );
    }

