import { OfferType } from './offer/offer';

export const initialState: string[] = [];

type ActionType =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: string }
  | { type: 'clear' };

export function reducer(
  state: typeof initialState,
  action: Readonly<ActionType>,
): typeof initialState {
  switch (action.type) {
    case 'add':
      return state.includes(action.payload)
        ? state.filter((tag) => tag !== action.payload)
        : [...state, action.payload];
    case 'remove':
      return state.filter((tag) => tag !== action.payload);
    case 'clear':
      return [];
    default:
      throw new Error();
  }
}

export const filterJobs = ({ tags, jobs }: { tags: string[]; jobs: OfferType[] }) => {
  if (!tags.length) {
    return jobs;
  }
  return jobs.filter(({ role, level, tools, languages }) => {
    const jobTags = [role, level, ...tools, ...languages];
    return tags.every((tag) => jobTags.includes(tag));
  });
};
