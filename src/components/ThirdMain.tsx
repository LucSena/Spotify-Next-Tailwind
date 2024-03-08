import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Volume2} from 'lucide-react'
import Image from 'next/image'

export function ThirdMain(){
    return (
        <div>
            <h2 className='font-bold text-2xl mt-10'>Seus Artistas Favoritos</h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
                <a href="" className='flex flex-col gap-2 hover:bg-white/5'>
                    <Image src="/album.jpg" className='w-full p-2 rounded-full' width={80} height={80} alt="Artista Travis" />
                    <strong className='font-semibold px-2'>Travis Scott</strong>
                    <span className='text-sm text-zinc-400 px-2 pb-2'>Artista</span>            
                </a>
            </div>
        </div>
    )
}