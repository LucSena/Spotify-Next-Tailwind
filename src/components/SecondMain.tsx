import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Volume2} from 'lucide-react'
import Image from 'next/image'

export function SecondMain(){
    return (
        <div>
            <h2 className='font-bold text-2xl mt-10'>Recently played</h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>            
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>            
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>            
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>            
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>               
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>               
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>               
                </a>
                <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do Álbum Travis Scott" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Travis Scott, Drake, Kanye West</span>               
                </a>
            </div>

        </div>
    )
}