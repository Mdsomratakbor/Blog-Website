import Posts from './components/Posts'
import './globals.css'
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white">
      Hello and welcome to my blog! 👋 &nbsp;
      <span className="whitespace-nowrap">
        I'm <span className="font-bold">Samrat Akbor</span>
      </span>
      </p>
      <Posts/>
    </main>
  )
}
