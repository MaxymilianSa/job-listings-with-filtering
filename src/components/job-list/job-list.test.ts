import { describe, expect, test } from 'vitest';

import { jobs } from './const';
import { filterJobs, reducer } from './useJobList';

describe('Job list methods tests', () => {
  test('reducer type is function', () => {
    expect(typeof reducer === 'function').toBe(true);
  });
  test('add new tag to tags list', () => {
    let tags: string[] = [];
    const newTag = 'javascript';

    tags = reducer(tags, { type: 'add', payload: newTag });
    expect(tags).toHaveLength(1);
  });
  test('try to add same tag to tags list', () => {
    let tags: string[] = [];
    const newTag = 'Javascript';

    tags = reducer(tags, { type: 'add', payload: newTag });
    tags = reducer(tags, { type: 'add', payload: newTag });
    expect(tags).toHaveLength(1);
  });
  test('remove tag from tags list', () => {
    let tags: string[] = ['javascript', 'python', 'senior', 'junior'];
    const removeTag = 'senior';

    tags = reducer(tags, { type: 'remove', payload: removeTag });
    expect(tags).toHaveLength(3);
  });
  test('remove tag with other case from tags list', () => {
    let tags: string[] = ['javascript', 'python', 'senior', 'junior'];
    const removeTag = 'SENIOR';

    tags = reducer(tags, { type: 'remove', payload: removeTag });
    expect(tags).toHaveLength(3);
  });
  test('clear tags list', () => {
    let tags: string[] = ['javascript', 'python', 'senior', 'junior'];

    tags = reducer(tags, { type: 'clear' });
    expect(tags).toHaveLength(0);
  });
});

describe('filterJobs method tests', () => {
  test('filterJobs method type is function', () => {
    expect(typeof filterJobs === 'function').toBe(true);
  });
  test('filter job lists without tag', () => {
    const jobList = jobs;

    const filteredJobs = filterJobs({ tags: [], jobs: jobList });
    expect(filteredJobs).toHaveLength(jobList.length);
  });
  test('filter job lists with javaScript tag', () => {
    const jobList = jobs;
    const tags = ['javascript'];

    const filteredJobs = filterJobs({ tags, jobs: jobList });
    expect(filteredJobs).toHaveLength(8);
  });
  test('filter job lists with fake tag', () => {
    const jobList = jobs;
    const tags = ['fake tag'];

    const filteredJobs = filterJobs({ tags, jobs: jobList });
    expect(filteredJobs).toHaveLength(0);
  });
  test('filter job lists with multiple tags', () => {
    const jobList = jobs;
    const tags = ['javascript', 'Sass'];

    const filteredJobs = filterJobs({ tags, jobs: jobList });
    expect(filteredJobs).toHaveLength(5);
  });
});
