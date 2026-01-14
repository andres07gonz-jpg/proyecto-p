import { useState } from 'react'

export default function CouponNote() {
  const [open, setOpen] = useState(false)
  const [coupon, setCoupon] = useState("")

  const generateCoupon = () => {
    const random = Math.floor(1000 + Math.random() * 9000)
    return `FLORES-${random}`
  }

  const openNote = () => {
    setCoupon(generateCoupon())
    setOpen(true)
  }

  const closeNote = () => {
    setOpen(false)
  }

  return (
    <div className="text-center space-y-4">
      {!open && (
        <button
          onClick={openNote}
          className="
            px-6 py-2
            rounded-full
            bg-roseSoft/70
            text-coffee
            font-serif
            text-sm sm:text-base
            shadow-sm
            hover:bg-roseSoft
            hover:scale-[1.03]
            transition
          "
        >
          Abrir una nota 💌
        </button>
      )}

      {open && (
        <div
          className="
            paper-texture
            mx-auto
            max-w-sm
            rounded-2xl
            p-6
            bg-white/95
            border border-roseSoft/40
            shadow-xl
            relative
          "
        >
          <button
            onClick={closeNote}
            className="
              absolute top-2 right-3
              text-coffee/40
              hover:text-coffee
              transition
            "
          >
            ✕
          </button>

          <p className="font-serif text-coffee text-base sm:text-lg">
            Esta nota vale por:
          </p>

          <p className="mt-2 text-2xl font-script text-roseSoft">
            Un café juntos? ☕
          </p>

          <div className="mt-4 text-sm text-coffee/60">
            Cupón:
            <span className="ml-2 font-mono bg-beigeSoft px-2 py-1 rounded">
              {coupon}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
