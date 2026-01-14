import { useEffect, useState } from 'react'
import peonyImg from './assets/peonia.png'
import tulipImg from './assets/tulipan.png'

export default function TulipRain() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now()
      const left = Math.random() * 100
      const duration = 5 + Math.random() * 5
      const types = ["tulip", "peony"] // ahora ambos son imágenes
      const type = types[Math.floor(Math.random() * types.length)]

      setFlowers(prev => [...prev, { id, left, duration, type }])

      setTimeout(() => {
        setFlowers(prev => prev.filter(f => f.id !== id))
      }, duration * 1000)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map(f => (
        <span
          key={f.id}
          className="flower"
          style={{
            left: `${f.left}%`,
            animationDuration: `${f.duration}s`,
          }}
        >
          {f.type === "peony" ? (
            <img src={peonyImg} alt="Peonía" className="w-8 h-8 object-contain" />
          ) : (
            <img src={tulipImg} alt="Tulipán" className="w-8 h-8 object-contain" />
          )}
        </span>
      ))}
    </div>
  )
}
