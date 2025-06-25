import React, { forwardRef, Ref, useState } from 'react';
import { Tooltip, Button } from '@carbon/react';
import { pkg } from '../../settings';

interface TruncatedTextProps {
  align?: string;
  autoalign?: boolean;
  collapseLabel?: string;
  expandLabel?: string;
  lines?: number;
  value?: string;
  type?: 'tooltip' | 'expand'; // refactor in web-components. with is reserved
}

const blockClass = `${pkg.prefix}--truncated-text`;
const componentName = 'TruncatedText';

export const TruncatedText = forwardRef<
  Ref<HTMLDivElement>,
  TruncatedTextProps
>((props, ref) => {
  const {
    align = 'top',
    autoalign,
    collapseLabel,
    expandLabel,
    lines = 2,
    value,
    type = 'tooltip',
  } = props;
  const [expanded, setExpanded] = useState(false);
  const tooltipVariant = (
    <Tooltip align={align} autoalign={autoalign} label={value}>
      <div>{value}</div>
    </Tooltip>
  );
  const expandVariant = (
    <>
      {value}
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? collapseLabel : expandLabel}
      </Button>
    </>
  );

  return (
    <div className={blockClass}>
      <div className={`${blockClass}__text-content`}>
        {type === 'tooltip' ? tooltipVariant : expandVariant}
      </div>
    </div>
  );
});

TruncatedText.displayName = componentName;
