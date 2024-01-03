import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <Image src="/yieldnest-dark.svg" alt="YieldNest Logo" width={300} height={300} />
      <Link className="py-4" href="/yieldnest-slides.pdf" locale={false} aria-label="YieldNest Pitchdeck" > 
        <button className="p-8 text-xl sm:text-3xl font-bold text-foreground hover:text-secondary">{`View YieldNest's Pitchdeck`}</button> 
      </Link>
    </main>
  )
}
