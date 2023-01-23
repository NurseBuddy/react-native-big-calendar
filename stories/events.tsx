import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { RecursiveArray, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import { EventRenderer, ICalendarEventBase } from '../src/interfaces'
import { formatStartEnd } from '../src/utils'

const eventNotes = (
  <View style={{ marginTop: 3 }}>
    <Text style={{ fontSize: 10, color: 'white' }}> Phone number: 555-123-4567 </Text>
    <Text style={{ fontSize: 10, color: 'white' }}> Arrive 15 minutes early </Text>
  </View>
)

export const events: Array<ICalendarEventBase & { color?: string }> = [
  {
    title: 'Watch Boxing',
    start: dayjs().set('hour', 0).set('minute', 0).set('second', 0).toDate(),
    end: dayjs().set('hour', 1).set('minute', 30).toDate(),
  },
  {
    title: 'Meeting',
    start: dayjs().set('hour', 10).set('minute', 0).toDate(),
    end: dayjs().set('hour', 10).set('minute', 30).toDate(),
  },
  {
    title: 'Coffee break',
    start: dayjs().set('hour', 14).set('minute', 30).toDate(),
    end: dayjs().set('hour', 15).set('minute', 30).toDate(),
  },
  {
    title: 'with color prop',
    start: dayjs().set('hour', 16).set('minute', 0).toDate(),
    end: dayjs().set('hour', 18).set('minute', 30).toDate(),
    color: 'purple',
  },
  {
    title: 'Repair my car',
    start: dayjs().add(1, 'day').set('hour', 7).set('minute', 45).toDate(),
    end: dayjs().add(1, 'day').set('hour', 13).set('minute', 30).toDate(),
  },
  {
    title: 'Meet Realtor',
    start: dayjs().add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
    end: dayjs().add(1, 'day').set('hour', 9).set('minute', 55).toDate(),
  },
  {
    title: 'Laundry',
    start: dayjs().add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
    end: dayjs().add(1, 'day').set('hour', 11).set('minute', 0).toDate(),
  },
  {
    title: "Doctor's appointment",
    start: dayjs().set('hour', 13).set('minute', 0).toDate(),
    end: dayjs().set('hour', 14).set('minute', 15).toDate(),
    children: eventNotes,
  },
]

export const spanningEvents: Array<ICalendarEventBase & { color?: string }> = [
  {
    title: 'Watch Boxing',
    start: dayjs().subtract(1, 'week').set('hour', 14).set('minute', 30).toDate(),
    end: dayjs().subtract(1, 'week').set('hour', 15).set('minute', 30).toDate(),
  },
  {
    title: 'Laundry',
    start: dayjs().subtract(1, 'week').set('hour', 1).set('minute', 30).toDate(),
    end: dayjs().subtract(1, 'week').set('hour', 2).set('minute', 30).toDate(),
  },
  {
    title: 'Meeting',
    start: dayjs().subtract(1, 'week').set('hour', 10).set('minute', 0).toDate(),
    end: dayjs().add(1, 'week').set('hour', 10).set('minute', 30).toDate(),
  },
  {
    title: 'Coffee break',
    start: dayjs().set('hour', 14).set('minute', 30).toDate(),
    end: dayjs().add(1, 'week').set('hour', 15).set('minute', 30).toDate(),
  },
  {
    title: 'Repair my car',
    start: dayjs().add(1, 'day').set('hour', 7).set('minute', 45).toDate(),
    end: dayjs().add(4, 'day').set('hour', 13).set('minute', 30).toDate(),
  },
  {
    title: 'Vacation',
    start: dayjs().subtract(1, 'month').set('hour', 7).set('minute', 45).toDate(),
    end: dayjs().add(1, 'month').set('hour', 13).set('minute', 30).toDate(),
  },
]

const getEventDataForTwoDays = (day: Dayjs) => {
  return [
    {
      title: 'Meeting',
      start: day.set('hour', 10).set('minute', 0).toDate(),
      end: day.set('hour', 10).set('minute', 30).toDate(),
    },
    {
      title: 'Watch Boxing',
      start: day.set('hour', 0).set('minute', 0).set('second', 0).toDate(),
      end: day.set('hour', 1).set('minute', 30).toDate(),
    },
    {
      title: 'Coffee break',
      start: day.set('hour', 14).set('minute', 30).toDate(),
      end: day.set('hour', 15).set('minute', 30).toDate(),
    },
    {
      title: 'with color prop',
      start: day.set('hour', 16).set('minute', 0).toDate(),
      end: day.set('hour', 18).set('minute', 30).toDate(),
      color: 'purple',
    },
    {
      title: 'Repair my car',
      start: day.add(1, 'day').set('hour', 7).set('minute', 45).toDate(),
      end: day.add(1, 'day').set('hour', 13).set('minute', 30).toDate(),
    },
    {
      title: 'Meet Realtor',
      start: day.add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
      end: day.add(1, 'day').set('hour', 9).set('minute', 55).toDate(),
    },
    {
      title: 'Laundry',
      start: day.add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
      end: day.add(1, 'day').set('hour', 11).set('minute', 0).toDate(),
    },
    {
      title: "Doctor's appointment",
      start: day.set('hour', 13).set('minute', 0).toDate(),
      end: day.set('hour', 14).set('minute', 15).toDate(),
      children: eventNotes,
    },
  ];
};
export const events3months: Array<ICalendarEventBase & { color?: string }> = [
  ...getEventDataForTwoDays(dayjs()),
  ...getEventDataForTwoDays(dayjs().add(-3, 'day')),
  ...getEventDataForTwoDays(dayjs().add(-14, 'day')),
  ...getEventDataForTwoDays(dayjs().add(-18, 'day')),
  ...getEventDataForTwoDays(dayjs().add(3, 'day')),
  ...getEventDataForTwoDays(dayjs().add(8, 'day')),
  ...getEventDataForTwoDays(dayjs().add(13, 'day')),
  {
    title: "Vacation",
    start: dayjs().add(-12, 'day').set('hour', 8).set('minute', 0).toDate(),
    end: dayjs().add(-4, 'day').set('hour', 16).set('minute', 0).toDate(),
    children: eventNotes,
  },
  {
    title: "Remember to take it easy!",
    start: dayjs().add(4, 'day').set('hour', 0).set('minute', 0).toDate(),
    end: dayjs().add(6, 'day').set('hour', 24).set('minute', 0).toDate(),
    children: eventNotes,
  },

]

export interface MyCustomEventType extends ICalendarEventBase {
  color?: string
}

export const customEventRenderer: EventRenderer<MyCustomEventType> = (
  event,
  touchableOpacityProps,
) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      style={[
        ...(touchableOpacityProps.style as RecursiveArray<ViewStyle>),
        {
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'lightgrey',
          borderLeftColor: event.color ? event.color : 'green',
          borderLeftWidth: 10,
          borderStyle: 'solid',
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      {dayjs(event.end).diff(event.start, 'minute') < 32 ? (
        <Text style={[{ color: 'black' }]}>
          {event.title},
          <Text style={[{ color: 'black' }]}>{dayjs(event.start).format('HH:mm')}</Text>
        </Text>
      ) : (
        <>
          <Text style={[{ color: 'black' }]}>{event.title}</Text>
          <Text style={[{ color: 'black' }]}>
            {formatStartEnd(event.start, event.end, 'HH:mm')}
          </Text>
          {event.children && event.children}
        </>
      )}
    </TouchableOpacity>
  )
}
