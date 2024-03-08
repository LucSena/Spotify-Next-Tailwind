import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Volume2} from 'lucide-react'
import Image from 'next/image'

export function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>

            <nav className='space-y-5 mt-10'>
                <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'>
                    <HomeIcon/>
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'>
                    <Search/>
                    Search
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'>
                    <Library/>
                    Your Library
                </a>
            </nav>

            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 -ml-2'>
                <div className='flex items-center gap-2'>
                    <Image src="/album2.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/album2.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/album2.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/album3.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/album3.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/album2.jpeg" width={56} height={56} alt="Capa do Álbum Travis Scott" />
                    <div className='flex flex-col mt-3'>
                        <a href="" className='text-sm font-bold text-zinc-100'>My Playlist Favorite</a>
                        <span className='text-xs text-zinc-400'>Album . Travis Scott</span>
                    </div>  
                </div>
                
            </nav>
        </aside>
    )
}