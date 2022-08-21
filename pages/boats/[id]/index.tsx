import { useRouter } from 'next/router'
import Link from 'next/link'
import AppHead from '@/components/atoms/AppHead'
import AppHeader from '@/components/organisms/AppHeader'
import AppHero from '@/components/atoms/AppHero'
import AppFooter from '@/components/atoms/AppFooter'
import AppDate from '@/components/atoms/AppDate'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
     <div className="flex flex-col min-h-screen">
      <AppHead />
      <AppHeader   />
      <AppHero />
      <main
        className={`${
          true && 'lg:grid-cols-[700px,1fr] xl:grid-cols-[840px,1fr]'
        } flex-grow grid grid-cols-1 mt-[86px] duration-500`}
      >
        {/* left - cards */}
        <div
          className={`${false && 'hidden'} px-4 py-8 duration-500 lg:py-12 lg:px-7`}
        >
          <div className="mb-4 space-x-1 space-y-2 text-gray-400 md:space-x-2 lg:mb-8">
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Cancellation flexibility
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Type of place
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Price
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Instant Book
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              More filters
            </button>
          </div>
          {/* information */}
          <p className="mb-4 text-sm text-gray-400">
            Review COVID-19 travel restrictions before you book.{' '}
            <Link href="/">
              <a className="underline">Learn more</a>
            </Link>
          </p>
          {/* list */}
          <section>
            { /* desarrollar componente de descriscciones y calendario */ }

            <AppDate months={1} />
          </section>
        </div>
        {/* right - maps */}
        <section
          className={`${
            false ? 'block fixed left-0 right-0 bottom-0 top-0' : 'hidden'
          } sm:block sm:sticky top-[86px] h-map flex-grow bg-yellow-900 bg-opacity-10 duration-100`}
        >
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/boats/[id]/[boat]" as={`/boats/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/boats/[id]/[boat]" as={`/boats/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
        </section>
      </main>
    <AppFooter />  
      </div>
    </>
  )
}

export default Post