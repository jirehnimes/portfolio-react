'use client';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Button, Icon } from '@/components/common';

const EVENT_SCROLL = 'scroll';
const SHOW_CLASS = 'show';

const ButtonToTop = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const scrollToTop = () => {
    // prettier-ignore
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleShow = () => {
    if (window.scrollY > 200) {
      setIsShow(true);
      return;
    }

    setIsShow(false);
  };

  const toggleShowClass = () => (isShow === true ? ` ${SHOW_CLASS}` : '');

  useEffect(() => {
    toggleShow();

    window.addEventListener(EVENT_SCROLL, toggleShow);

    return () => {
      window.removeEventListener(EVENT_SCROLL, toggleShow);
    };
  }, []);

  return (
    <Button
      className={`button--to-top is-primary ${toggleShowClass()}`}
      onClick={scrollToTop}
    >
      <Icon icon={faChevronUp} />
    </Button>
  );
};

export default ButtonToTop;
