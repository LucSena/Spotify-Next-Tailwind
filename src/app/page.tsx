import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Sidebar } from '@/components/Siderbar';

import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Volume2} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>

    </div>
  );
}
