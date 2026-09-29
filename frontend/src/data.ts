export type Page = {
  id: string
  parentId: string | null
  title: string
  dailyDate?: string
  blocks: string[]
}

export const user = { name: 'Вася', email: 'vasya@example.com' }

export const pages: Page[] = [
  { id: 'java', parentId: null, title: 'Java', blocks: [] },
  {
    id: 'd1',
    parentId: 'java',
    title: 'День 1',
    dailyDate: '2026-09-26',
    blocks: ['Установил JDK и IntelliJ.', 'Написал Hello World.'],
  },
  {
    id: 'd2',
    parentId: 'java',
    title: 'День 2',
    dailyDate: '2026-09-27',
    blocks: ['Типы данных, переменные, ввод/вывод.'],
  },
  {
    id: 'd3',
    parentId: 'java',
    title: 'День 3',
    dailyDate: '2026-09-28',
    blocks: ['Циклы и условия.', 'Решил 3 задачи на LeetCode.'],
  },
  { id: 'd3-1', parentId: 'd3', title: 'Задачи', blocks: ['Two Sum', 'Palindrome Number'] },
  {
    id: 'd4',
    parentId: 'java',
    title: 'День 4',
    dailyDate: '2026-09-29',
    blocks: ['Массивы и строки.'],
  },
]
