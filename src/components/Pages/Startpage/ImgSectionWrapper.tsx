import ImageSection from './ImageSection'
import TVSection from '../../../assets/img/TV.png'
import DownloadSection from '../../../assets/img/downloadSection.jpg'
import WatchSection from '../../../assets/img/watch.png'
import KidsSection from '../../../assets/img/kidsSection.png'

const imgSections = [
  {
    title: 'Enjoy on your TV.',
    description: `Watch on Smat TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.`,
    image: TVSection,
  },
  {
    title: 'Download your shows to watch offline.',
    description:
      'Save your favorites easily and always have something to watch.',
    image: DownloadSection,
  },
  {
    title: 'Watch everywhere.',
    description:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    image: WatchSection,
  },
  {
    title: 'Create profiles for kids.',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    image: KidsSection,
  },
]

const ImgSectionWrapper = () => {
  return (
    <>
      {imgSections.map((section, index) => {
        return (
          <ImageSection
            section={section}
            imgFirst={!!(index % 2)}
            key={section.title}
          />
        )
      })}
    </>
  )
}

export default ImgSectionWrapper
