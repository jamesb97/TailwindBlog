interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Smart Checkout System',
    description: `What if you could pay seamlessly at the grocery store without having to pull out your wallet and navigating rapidly through the checkout lines.`,
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/1.jpg?alt=media&token=e0591058-c8f7-42dd-b712-58ae95534df3',
    href: 'https://bit.ly/ChecSys',
  },
  {
    title: 'Recipe App',
    description: `Ever wondered how long it takes you to find the right recipes online for your next meal or smoothie. Instead of spending countless hours navigating different websites and cookbooks, worry no more. This smart intelligent app uses the latest ingredients and pulls each recipe from a trustworthy service, completing the hard work for us, so we can enjoy what we love to do.`,
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/6.png?alt=media&token=9bb02ad3-cc48-4e84-87d8-effe84986d2d',
    href: 'https://infallible-hamilton-a8e2a2.netlify.app/',
  },
  {
    title: 'Shortest Path Algorithm',
    description: `Ever wondered how an algorithm works and how it can determine how we view content on social media, how packages get transported to our house, and how Netflix can recommend a show for us to watch with a shuffle function, look no further.`,
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/7.png?alt=media&token=9d2be112-d0c0-4548-84ff-17e4ae6bc54b',
    href: 'https://determined-lamarr-304345.netlify.app/',
  },
]

export default projectsData
