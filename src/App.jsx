import Header from './Header'
import Poem from './Poem'
import Playlist from './Playlist'
import Footer from './Footer'
import CouponNote from './CouponNote'
import TulipRain from './TulipRain'


const poemText = `Entre tulipanes y peonías,
como un café compartido,
en viajes que nunca acaban.`

const playlistSongs = [
  'Canción 1',
  'Canción 2',
  'Canción 3',
]


export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 via-beigeSoft to-greenSoft flex items-center justify-center px-4 py-8">
  <TulipRain />
  <main
    className="
      relative z-10
      paper-texture
      backdrop-blur-md
      rounded-3xl
      shadow-2xl
      w-full
      max-w-xl
      p-6 sm:p-10
      space-y-8 sm:space-y-12
      border border-roseSoft/40
      animate-breathe
    "
  >
  

  {/* Flor esquina superior izquierda */}
{/* Flor esquina superior izquierda */}
<svg
  aria-hidden="true"
  className="absolute top-6 right-6 w-24 opacity-10 hidden sm:block pointer-events-none"
  viewBox="0 0 200 100"
  fill="none"
>
  <path
    d="M0 50 C50 10 150 90 200 50"
    stroke="currentColor"
    strokeWidth="2"
    className="text-coffee"
  />
</svg>


{/* Flor esquina inferior derecha */}
<svg
  aria-hidden="true"
  className="
    pointer-events-none
    absolute bottom-4 right-4
    w-10 sm:w-14 md:w-16
    rotate-180
    text-greenSoft/40
    z-0
    hidden sm:block
  "
  viewBox="0 0 200 200"
  fill="none"
>
  <path
    d="M100 10 C130 40 170 80 100 190 C30 80 70 40 100 10 Z"
    stroke="currentColor"
    strokeWidth="2"
  />
</svg>




        {/* Header */}
        <div className="animate-fade-up">
          <Header />
        </div>

        {/* Fecha actual */}
<div className="text-center text-sm sm:text-base text-coffee/60 font-serif">
  {new Date().toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}
</div>


        

        <div className="flex justify-center gap-2 opacity-40">
          <span className="w-1 h-1 bg-roseSoft rounded-full"></span>
          <span className="w-1 h-1 bg-roseSoft rounded-full"></span>
          <span className="w-1 h-1 bg-roseSoft rounded-full"></span>
        </div>


        {/* Separador */}
        <div className="w-20 h-px bg-roseSoft/40 mx-auto"></div>

        {/* Poema */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <Poem text={poemText} />
        </div>

        {/* Nota sorpresa */}
        <div className="animate-fadeSoft [animation-delay:250ms]">
          <CouponNote />
        </div>


        {/* Separador */}
        <div className="w-12 h-px bg-roseSoft/30 mx-auto"></div>

        {/* Playlist */}
        <div className="animate-fade-up [animation-delay:300ms]">
          <Playlist songs={playlistSongs} />
        </div>

        

        {/* Footer */}
        <div className="animate-fade-up [animation-delay:450ms]">
          <Footer />
        </div>
      </main>
    </div>
  )
}
