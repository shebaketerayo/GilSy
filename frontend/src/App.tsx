import { useState } from 'react'
import { pages, user } from './data'
import { Tree } from './Tree'

const ROOT_ID = 'java'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function App() {
  const [selectedId, setSelectedId] = useState('d3')
  const root = pages.find((p) => p.id === ROOT_ID)!
  const selected = pages.find((p) => p.id === selectedId)!
  const parent = pages.find((p) => p.id === selected.parentId)

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-head">{root.title}</div>
        <nav className="sidebar-tree">
          <Tree pages={pages} parentId={ROOT_ID} selectedId={selectedId} onSelect={setSelectedId} />
        </nav>
        <div className="account">
          <div className="avatar">{user.name[0]}</div>
          <div>
            <div className="account-name">{user.name}</div>
            <div className="account-email">{user.email}</div>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="crumbs">
          {root.title}
          {parent && parent.id !== root.id && ` / ${parent.title}`}
          {' / '}
          {selected.title}
        </div>
        <article className="page">
          <h1>{selected.title}</h1>
          {selected.dailyDate && <div className="date">{formatDate(selected.dailyDate)}</div>}
          {selected.blocks.map((b, i) => (
            <p key={i}>{b}</p>
          ))}
        </article>
      </main>
    </div>
  )
}
