import {isoDateTimeToLocalDateTime} from './time-convertor'

describe('isoDateTimeToLocalDateTime', () => {
  const isoDateTime = '1997-07-16T18:20:00.000Z'
  const localDateTime = '1997-07-17 01:20:00'

  it('should covert to local date time correctly', () => {
    const actual = isoDateTimeToLocalDateTime(isoDateTime);

    expect(actual).toEqual(localDateTime);
  })
})
