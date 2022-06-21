import dayjs from "dayjs";

export const isoDateTimeToLocalDateTime = (isoDateTime: string) =>
  dayjs(isoDateTime).format('YYYY-MM-DD HH:mm:ss')

  export const isoDateTimeToLocalDate = (isoDateTime: string) =>
  dayjs(isoDateTime).format('YYYY-MM-DD')
