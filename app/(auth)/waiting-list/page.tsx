import WaitingListForm from '@/components/landing-page/form/waiting-list-form'
import Head from 'next/head';

export const metadata = {
  title: "Waiting List - Primavera - AI",
  description: "Welcome to Primavera - AI. Start automating everything with AI. Join the waiting list.",
}

import Link from 'next/link'

interface WaitingListPageProps {
  searchParams: {
    callbackUrl: string
  }
}

const WaitingListPage = ({
  searchParams: { callbackUrl }
}: WaitingListPageProps) => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://www.primavera-ai.com/waiting-list" />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Start automating everything with AI. Join the waiting list.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <WaitingListForm callbackUrl={callbackUrl || "/"}/>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic">Or</div>
              <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
            </div>
            <div className="text-gray-600 text-center mt-6">
            Already a Primavera user? <Link title="Sign-in" href="/sign-in" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Log in</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WaitingListPage