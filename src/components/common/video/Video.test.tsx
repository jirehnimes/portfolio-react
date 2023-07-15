import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Video from './Video';

const QUERY_SELECTOR = 'video';
const SAMPLE_VIDEO = '/assets/index_bg.mp4';

describe('Video', () => {
  it('renders default', () => {
    const { container } = render(
      <Video source={{ src: SAMPLE_VIDEO, type: 'video/mp4' }} />,
    );

    const video = container.querySelector(QUERY_SELECTOR);

    expect(video).toBeInTheDocument();
  });
});
