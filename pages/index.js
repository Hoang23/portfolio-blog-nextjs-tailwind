import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello, <br></br>
            I'm{' '}
            <span className="text-grey-900 dark:text-grey-900 text-3xl font-bold lg:text-5xl">
              Hoang
            </span>
          </h1>
          <p className="lg:text-2x my-2 text-lg lg:my-4">Software Engineer</p>

          {/* font-light lg:text-xl */}
          <p className="text-lg font-light leading-7 text-gray-500 dark:text-gray-300">
            Read more
            <Link className="ml-2 mr-2 font-normal text-black" href="/about">
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={'#CCFBF1'}
              >
                about me
              </RoughNotation>
            </Link>
            or see my
            <Link className="ml-2 mr-2 font-normal text-black" href="/projects">
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={'#CCFBF1'}
              >
                projects
              </RoughNotation>
            </Link>
          </p>
        </div>
      </div>
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
