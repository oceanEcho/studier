import React, { FunctionComponent, ReactNode, useState, useCallback } from 'react';
import cn from 'classnames';

import styles from './ExpandablePanel.module.scss';

import { Panel } from '../Panel';

export interface IExpandablePanelProps {
  className?: string;
  children: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  hasBeenOpened?: boolean;
  hasContent?: boolean;
}

export const ExpandablePanel: FunctionComponent<IExpandablePanelProps> = ({
  className = '',
  children,
  title,
  hasBeenOpened = false,
  hasContent = true,
}) => {
  const [isOpened, setOpened] = useState(hasBeenOpened);

  const onOpen = useCallback(() => {
    if (!hasContent) {
      return;
    }

    setOpened(true);
  }, [hasContent]);

  const onClose = useCallback(() => {
    setOpened(false);
  }, []);

  const arrowStyles = cn(styles.openArrow, { [styles.disabledArrow]: !hasContent });

  return (
    <Panel className={cn(styles.root, className)}>
      <div className={styles.header}>
        <div>{title}</div>
        {isOpened ? (
          <div className={arrowStyles} onClick={onClose}>
            ▲
          </div>
        ) : (
          <div className={arrowStyles} onClick={onOpen}>
            ▼
          </div>
        )}
      </div>
      {isOpened && <div className={styles.content}>{children}</div>}
    </Panel>
  );
};
