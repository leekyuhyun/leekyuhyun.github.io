export function formatMonth(date: string | Date): string {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  })
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateDuration(
  start: string | Date,
  end?: string | Date
): string {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  const diffMs = endDate.getTime() - startDate.getTime()
  const diffMonths = Math.round(diffMs / (1000 * 60 * 60 * 24 * 30))
  if (diffMonths < 1) return "1개월 미만"
  if (diffMonths === 1) return "약 1개월"
  return `약 ${diffMonths}개월`
}
