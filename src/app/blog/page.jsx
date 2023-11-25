import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata = {
  title: 'Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Kontakt" title="Wie kann man euch erreichen?">
        <p>
          Am liebsten per E-Mail. 
        
        <p>

        </p>
          sam@appetura.de

        </p>
      </PageIntro>

      

      <ContactSection />
    </>
  )
}
