import { useState } from 'react'
import './App.css'

const pipelineSteps = [
  {
    number: '01',
    title: 'Código',
    description: 'Aplicação React criada com Vite e pronta para produção.',
    status: 'Pronto',
  },
  {
    number: '02',
    title: 'Testes',
    description: 'Vitest e Testing Library validam a aplicação automaticamente.',
    status: 'Aprovado',
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'GitHub Actions publica a pasta dist no GitHub Pages.',
    status: 'Automático',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark" aria-hidden="true">KA</span>
          <span>
            <strong>front_s18_actions</strong>
            <small>Registro da Semana 18</small>
          </span>
        </a>

        <span className="pipeline-status">
          <span className="status-dot" aria-hidden="true" />
          Pipeline configurada
        </span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">PROGRAMAÇÃO FRONT-END • 3º BIMESTRE</p>
          <h1>Get started com uma esteira CI/CD completa.</h1>
          <p className="hero-description">
            Código, testes automatizados e deploy reunidos em um único fluxo,
            executado com segurança pelo GitHub Actions.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="counter"
              onClick={() => setCount((currentCount) => currentCount + 1)}
            >
              Count is {count}
            </button>
            <a
              className="repository-link"
              href="https://github.com/kauaneduardo-dev/front_s18_actions"
              target="_blank"
              rel="noreferrer"
            >
              Ver repositório <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="student-card" aria-label="Identificação do aluno">
          <div className="student-card-header">
            <span>ALUNO</span>
            <span className="verified-badge">✓ VERIFICADO</span>
          </div>
          <div className="avatar" aria-hidden="true">KE</div>
          <h2>Kauan Eduardo</h2>
          <p>Desenvolvimento de Sistemas</p>
          <dl>
            <div>
              <dt>Turma</dt>
              <dd>3ª série B</dd>
            </div>
            <div>
              <dt>Ano</dt>
              <dd>2026</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="pipeline-section" aria-labelledby="pipeline-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FLUXO AUTOMATIZADO</p>
            <h2 id="pipeline-title">Da alteração ao deploy</h2>
          </div>
          <span className="green-label">100% GREEN</span>
        </div>

        <div className="pipeline-grid">
          {pipelineSteps.map((step) => (
            <article className="pipeline-card" key={step.number}>
              <div className="card-topline">
                <span className="step-number">{step.number}</span>
                <span className="step-status">● {step.status}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quality-panel" aria-label="Resumo de qualidade">
        <div>
          <span className="quality-value">Vitest</span>
          <span className="quality-label">testes automatizados</span>
        </div>
        <div>
          <span className="quality-value">100%</span>
          <span className="quality-label">cobertura exigida</span>
        </div>
        <div>
          <span className="quality-value">Node 20</span>
          <span className="quality-label">ambiente da esteira</span>
        </div>
        <div>
          <span className="quality-value">Pages</span>
          <span className="quality-label">deploy automático</span>
        </div>
      </section>

      <footer>
        <span>Escola Manoel Ignácio • Semana 18</span>
        <span>Vite + React + Vitest + GitHub Actions</span>
      </footer>
    </main>
  )
}

export default App
