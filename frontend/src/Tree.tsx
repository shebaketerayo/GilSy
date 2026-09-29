import { useState } from 'react'
import type { Page } from './data'

type Props = {
  pages: Page[]
  parentId: string | null
  selectedId: string
  onSelect: (id: string) => void
  depth?: number
}

export function Tree({ pages, parentId, selectedId, onSelect, depth = 0 }: Props) {
  const items = pages.filter((p) => p.parentId === parentId)
  return (
    <ul className="tree">
      {items.map((p) => (
        <TreeItem key={p.id} page={p} pages={pages} selectedId={selectedId} onSelect={onSelect} depth={depth} />
      ))}
    </ul>
  )
}

function TreeItem({ page, pages, selectedId, onSelect, depth }: Omit<Props, 'parentId' | 'depth'> & { page: Page; depth: number }) {
  const [open, setOpen] = useState(true)
  const hasChildren = pages.some((p) => p.parentId === page.id)
  return (
    <li>
      <div
        className={'tree-row' + (page.id === selectedId ? ' selected' : '')}
        style={{ paddingLeft: 8 + depth * 16 }}
        onClick={() => onSelect(page.id)}
      >
        <button
          className="toggle"
          style={{ visibility: hasChildren ? 'visible' : 'hidden' }}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          {open ? '▾' : '▸'}
        </button>
        <span>{page.title}</span>
      </div>
      {hasChildren && open && (
        <Tree pages={pages} parentId={page.id} selectedId={selectedId} onSelect={onSelect} depth={depth + 1} />
      )}
    </li>
  )
}
