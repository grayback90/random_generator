import Image from 'next/image'
import words from './words.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 class="underline underline-offset-3 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Random Generator for Drawing</h1>
      </header>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green to Blue</button>
      <div class="container mx-auto">
        <div class="flex justify-between">
          <div class="w-1/2 text-center">
            <h2 class="mb-5 underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 text-xl">adjective</h2>
            <span class="mx-10 block max-w-none p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-bold text-red-400 text-lg">
            {words.adjectives.map((adjectives) => {
                return <option key={adjectives.id} value={adjectives.id}>{adjectives.adjectiv}</option>
              })}
            </span>
          </div>
          <div class="w-1/2 text-center">
          <h2 class="mb-5 underline underline-offset-3 decoration-4 decoration-green-400 dark:decoration-green-600 text-xl">noun</h2>
            <span class="mx-10 block max-w-none p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-bold text-red-400 text-lg">
              {words.nouns.map((nouns) => {
                return <option key={nouns.id} value={nouns.id}>{nouns.noun}</option>
              })}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
