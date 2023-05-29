import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// helper functions
const subtractMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - months);
  return newDate;
};
const dateObjectToDateString = (date: Date) => date.toISOString().split('T')[0];

const isPreferDarkMode =
  typeof window != 'undefined' &&
  (window?.localStorage?.darkMode === 'true' ||
    (!('darkMode' in window?.localStorage) &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches));

// initial value
const now = new Date();
const initalFormValue = {
  startAt: dateObjectToDateString(subtractMonths(now, 3)),
  endAt: dateObjectToDateString(now),
  magnitude: '3',
  userLocation: [undefined, undefined] as [
    number | undefined,
    number | undefined
  ],
  minDepth: '0',
  maxDepth: '1000',
};

// atom instances
export const settingAtom = atom<typeof initalFormValue>(initalFormValue);

export const darkModeAtom = atomWithStorage('darkMode', isPreferDarkMode);
