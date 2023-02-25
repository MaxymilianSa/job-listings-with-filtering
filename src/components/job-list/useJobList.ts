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
      return state.map((tag) => tag).includes(action.payload.toLowerCase())
        ? state
        : [...state, action.payload.toLowerCase()];
    case 'remove':
      return state.filter((tag) => tag !== action.payload.toLowerCase());
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
    return tags
      .map((tag) => tag.toLowerCase())
      .every((tag) => jobTags.map((jobTag) => jobTag.toLowerCase()).includes(tag));
  });
};
