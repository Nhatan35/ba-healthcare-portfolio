type ArtworkKind = "C1" | "C2" | "C3" | "analysis";

const captions: Record<ArtworkKind, { title: string; description: string }> = {
  C1: { title: "Appointment workflows", description: "Arcs and abstract time windows suggest appointment and capacity questions. No real schedule or operational rules are represented." },
  C2: { title: "Communications integration", description: "Crossing strands and an open lens suggest coordination across boundaries. This is not a system map or a representation of actual interfaces." },
  C3: { title: "Scheduling constraints", description: "Overlapping bands suggest availability and coverage questions. No employee roster, shift times or policy is represented." },
  analysis: { title: "The thread of analysis", description: "Flowing strands pass through three lenses: context, requirements and validation. An illustrative way to think about analysis, not completed project phases." },
};

/** Original conceptual artwork from the owner-selected Research Folio exploration. */
export function AnalyticalArtwork({ kind, className = "" }: { kind: ArtworkKind; className?: string }) {
  const caption = captions[kind];
  return <figure className={`analytical-artwork artwork-${kind.toLowerCase()} ${className}`}>
    <div className="artwork-surface">
      <svg viewBox="0 0 640 440" width="640" height="440" aria-hidden="true" focusable="false" fill="none">
        {kind === "analysis" ? <>
          {Array.from({ length: 13 }, (_, n) => <path key={n} d={`M-20 ${35+n*29}C90 ${430-n*30} 215 ${-90+n*32} 320 ${145+n*11}S470 ${145+n*11} 660 ${145+n*11}`} stroke={n%4===0 ? "var(--foreground)" : "var(--accent)"} strokeWidth={n%4===0 ? 2.4 : 1} opacity={n%4===0 ? .85 : .4} />)}
          <g stroke="var(--accent)"><ellipse cx="205" cy="215" rx="63" ry="170" opacity=".4" /><ellipse cx="338" cy="215" rx="52" ry="128" opacity=".6" /><ellipse cx="475" cy="215" rx="38" ry="95" /></g>
          <g fill="var(--foreground)"><circle cx="338" cy="211" r="8" /><circle cx="475" cy="211" r="5" /></g>
        </> : kind === "C1" ? <>
          <g stroke="var(--accent)"><circle cx="320" cy="220" r="156" opacity=".2" /><circle cx="320" cy="220" r="115" strokeDasharray="3 7" opacity=".6" /><path d="M30 290h132q32 0 32-32V145q0-35 35-35h340M40 330h160q35 0 35-35V200q0-35 35-35h330" /><path d="M320 72a148 148 0 0 1 132 215M392 344a143 143 0 0 1-116 18" strokeWidth="20" /></g>
          <g fill="var(--surface)" stroke="var(--border)">{Array.from({ length: 20 }, (_, n) => <rect key={n} x={240+(n%5)*32} y={174+Math.floor(n/5)*32} width="32" height="32" />)}</g>
          <rect x="272" y="206" width="64" height="32" fill="var(--accent)" /><circle cx="194" cy="263" r="7" fill="var(--foreground)" /><circle cx="453" cy="185" r="6" fill="var(--accent)" />
        </> : kind === "C2" ? <>
          <g stroke="var(--accent)">{[0,1,2,3,4].map(n => <path key={n} d={`M25 ${75+n*69}C165 ${75+n*69} 175 ${100+n*44} 305 ${100+n*44}S440 ${75+(4-n)*69} 615 ${75+(4-n)*69}`} strokeWidth={n===2 ? 4 : 1.5} opacity={n===2 ? 1 : .65} />)}<ellipse cx="320" cy="220" rx="84" ry="168" opacity=".32" /><ellipse cx="320" cy="220" rx="145" ry="88" opacity=".3" /><path d="M320 24v392" strokeDasharray="3 7" opacity=".45" /></g>
          <rect x="275" y="115" width="90" height="210" rx="45" fill="var(--surface-muted)" fillOpacity=".85" stroke="var(--accent)" />
          {[0,1,2,3,4].map(n => <circle key={n} cx={n%2 ? 290 : 350} cy={138+n*40} r={n===2 ? 9 : 4} fill={n===2 ? "var(--foreground)" : "var(--accent)"} />)}
          <path d="M298 220h44" stroke="var(--foreground)" strokeWidth="2" /><g fill="var(--accent)"><circle cx="108" cy="75" r="6" /><circle cx="524" cy="351" r="6" /></g>
        </> : <g transform="translate(110 64)">
          <path d="M0 0v310M80 0v310M160 0v310M240 0v310M320 0v310M400 0v310" stroke="var(--accent)" opacity=".25" />
          {[0,1,2,3].map(n => <g key={n}><rect x={[0,80,40,160][n]} y={n*69+20} width={[285,320,250,240][n]} height="44" rx="22" fill={n===1 ? "var(--foreground)" : n===2 ? "var(--accent)" : "var(--artwork-sage)"} /><path d={`M${[0,80,40,160][n]+24} ${n*69+42}h${[237,272,202,192][n]}`} stroke={n===1||n===2 ? "var(--surface)" : "var(--accent)"} opacity=".7" strokeDasharray="2 8" /></g>)}
          <rect x="200" width="80" height="306" rx="40" stroke="var(--accent)" strokeWidth="2" /><circle cx="240" cy="42" r="8" fill="var(--foreground)" /><circle cx="240" cy="249" r="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
        </g>}
      </svg>
    </div>
    <figcaption><strong>{caption.title}</strong><span>Concept illustration · Not project evidence</span><span className="sr-only">{caption.description}</span></figcaption>
  </figure>;
}
