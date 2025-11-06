// import Info from '../../components/Info'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')

  const todos: { id: number; title: string; completed: boolean }[] = await res.json()

  return (
    <div>
      <h1 className="header-title">Інформація</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4">
            <h2 className="header-title-h2">Заголовок: {todo.title}</h2>
            <p className="text-gray-600 -mt-4 mb-6">Статус: {todo.completed ? 'Завершено' : 'Не завершено'}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  // return <Info />
}
