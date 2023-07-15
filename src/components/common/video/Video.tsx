'use client';

import { SourceHTMLAttributes, VideoHTMLAttributes } from 'react';

type VideoPropsType = VideoHTMLAttributes<HTMLVideoElement> & {
  source: SourceHTMLAttributes<HTMLSourceElement>;
};

const Video = ({ source, ...attributes }: VideoPropsType) => {
  return (
    <video {...attributes}>
      <source {...source} />
    </video>
  );
};

export default Video;
