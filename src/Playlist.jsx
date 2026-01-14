import React from "react";

export default function Playlist() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="mt-8 text-center">
      {/* Placeholder mientras carga */}
      {!loaded && (
        <div className="animate-pulse text-coffee/70 font-serif">
          🌸 Cargando...
        </div>
      )}

      {/* Iframe de Apple Music */}
      <iframe
        onLoad={() => setLoaded(true)}
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation"
        src="https://embed.music.apple.com/mx/playlist/pl.u-MDAWk9NIA5KgRM3"
      ></iframe>
    </div>
  );
}
