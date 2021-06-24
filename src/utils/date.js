const ONE_SECOND = 1000

const fromSecondsToMiliseconds = (seconds) => seconds * ONE_SECOND

export const formatDate = (timestamp, offset = 0) => {
  const dateTimeInMiliseconds = fromSecondsToMiliseconds(timestamp)
  const offsetInMiliseconds = fromSecondsToMiliseconds(offset)
  const date = new Date(dateTimeInMiliseconds + offsetInMiliseconds).toISOString()
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  )
  return formattedDate
}
