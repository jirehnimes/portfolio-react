import Video from './Video';

const DEFAULT_TYPE = 'video/mp4';
const SAMPLE_VIDEO = '/assets/index_bg.mp4';

export default {
  title: 'Common/Video',
  component: Video,
};

export const Default = {
  args: {
    source: {
      src: SAMPLE_VIDEO,
      type: DEFAULT_TYPE,
    },
  },
};
