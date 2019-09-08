import { Box as ReakitBox } from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Modal, ModalProps } from '../Modal';

import * as styles from './styles';

export type LocalOverlayProps = {};
export type OverlayProps = ModalProps & LocalOverlayProps;

const useProps = createHook<OverlayProps>(
  (props, themeKey) => {
    const htmlProps = Modal.useProps(props, { themeKey: 'Overlay' });

    const className = useClassName({
      style: styles.Overlay,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Overlay' }
);

export const Overlay = createComponent<OverlayProps>(
  props => {
    const overlayProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: overlayProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      modal: false,
      placement: 'center'
    },
    themeKey: 'Overlay'
  }
);