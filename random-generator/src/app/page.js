import { useState } from 'react';
import words from './components/words.json'
import RandomGenerateButton from './components/randomGenerateButton';

export default function Home() {
  const handleClick = () => {
    alert('Knopf gedrückt!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="underline underline-offset-3 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Random Generator for Drawing</h1>
      </header>
      <RandomGenerateButton onClick={handleClick}/>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-1/2 text-center">
            <h2 className="mb-5 underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 text-xl">adjective</h2>
            <span className="mx-10 block max-w-none p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-bold text-red-400 text-lg">
            {words.adjectives.map((adjectives) => {
                if(adjectives.id == 2) {
                  return <p>{adjectives.adjectiv}</p>
                }
              })}
            </span>
          </div>
          <div className="w-1/2 text-center">
          <h2 className="mb-5 underline underline-offset-3 decoration-4 decoration-green-400 dark:decoration-green-600 text-xl">noun</h2>
            <span className="mx-10 block max-w-none p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-bold text-red-400 text-lg">
              {words.nouns.map((nouns) => {
                  if(nouns.id == 2)
                  return <p>{nouns.noun}</p>
              })}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
