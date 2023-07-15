'use client';

import { Video } from '@/components/common';

const VIDEO_SOURCE = '/assets/videos/index_bg.mp4';

const HomeVideo = () => {
  return (
    <Video
      autoPlay
      muted
      loop
      className='home__background-video'
      source={{ src: VIDEO_SOURCE, type: 'video/mp4' }}
    />
  );
};

export default HomeVideo;
