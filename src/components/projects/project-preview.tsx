import type { Project } from '@/types/content'

export default function ProjectPreview({ kind }: { kind: Project['preview'] }) {
  if (kind === 'forecast') {
    return (
      <div className="project-visual visual-forecast" aria-hidden="true">
        <div className="visual-label"><span>Time Series</span><span>Forecast</span></div>
        <svg viewBox="0 0 240 72" preserveAspectRatio="none">
          <path d="M0 58 C30 64 48 45 76 38 S112 54 143 39 S168 30 185 12 S210 25 240 6" fill="none" stroke="#006097" strokeWidth="2" />
          <path d="M0 64 C28 60 57 59 82 55 S125 59 150 49 S191 53 240 32" fill="none" stroke="#a7bdc9" strokeDasharray="4 4" />
        </svg>
      </div>
    )
  }

  if (kind === 'sentiment') {
    return (
      <div className="project-visual visual-sentiment" aria-hidden="true">
        <div className="donut" />
        <div className="metric"><strong>NLP</strong><small>Sentiment Analysis</small></div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-telemetry" aria-hidden="true">
      <div className="visual-label"><span>Telemetry</span><span>Live Signal</span></div>
      <div className="bars">{[25, 42, 31, 57, 70, 49].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
    </div>
  )
}
