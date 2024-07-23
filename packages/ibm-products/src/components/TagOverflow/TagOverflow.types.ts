import { ReactNode, RefObject } from 'react';

export type Item = {
  className?: string;
  filter?: string;
  id: string;
  label: string;
  onClose: () => void;
  tagType?:
    | 'red'
    | 'magenta'
    | 'purple'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'gray'
    | 'cool-gray'
    | 'warm-gray'
    | 'high-contrast'
    | 'outline';
  type?: string;
};

export type TagOverflowProps = {
  align?: 'start' | 'center' | 'end';
  allTagsModalSearchLabel?: string;
  allTagsModalSearchPlaceholderText?: string;
  allTagsModalTarget?: ReactNode;
  allTagsModalTitle?: string;
  className?: string;
  containingElementRef?: RefObject<HTMLElement>;
  items: Item[];
  maxVisible?: number;
  measurementOffset?: number;
  multiline?: boolean;
  overflowAlign?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top';
  overflowClassName?: string;
  overflowType?: 'default' | 'tag';
  onOverflowTagChange?: (arr: Item[]) => void;
  showAllTagsLabel?: string;
  tagComponent?: string;
};

export type TagOverflowPopoverProps = {
  allTagsModalSearchThreshold?: number;
  className?: string;
  onShowAllClick?: () => void;
  overflowAlign?: string;
  overflowTags?: Item[];
  overflowType?: string;
  popoverOpen?: boolean;
  setPopoverOpen?: (x: boolean) => void;
  showAllTagsLabel?: string;
};
