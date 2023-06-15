import { NextPage } from 'next'
import Navbar from '../../component/organisms/Navbar'
import Hero1 from '../../component/molecules/Hero1'
import Swipe from '../../component/organisms/Swipe'
import Outfit from '../../component/organisms/Outfit'
import Foot from '../../component/organisms/Foot'

interface Props {text: string}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <Navbar />
    <div>
      <Hero1 />
    </div>
    <div>
      <Swipe/>
    </div>
    <div>
      <Outfit/>
    </div>
    <div>
      <Foot/>
    </div>
  </div>
}

export default Page