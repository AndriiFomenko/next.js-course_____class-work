// Next.js 15+: GET запити динамічні за замовчуванням (не кешуються)

// Варіант 1: За замовчуванням - не потрібна конфігурація
// Варіант 2: Явна динамічність (обов'язково в Next.js 14)
export const dynamic = 'force-dynamic'

// Варіант 3: Статичне кешування
// export const dynamic = 'force-static'

// Варіант 4: ISR - оновлення кешу через N секунд
// export const revalidate = 10

export async function GET() {
  return Response.json(
    { date: new Date().toLocaleString() },
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  )
}
