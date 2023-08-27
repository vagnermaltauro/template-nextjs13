import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from 'jest-extended';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
