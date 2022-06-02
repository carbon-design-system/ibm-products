import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/icons-react';
import { Button } from '@carbon/react';
import { pkg } from '../../settings';
const componentName = 'AddSelectMetaPanel';

export let AddSelectMetaPanel = ({
  closeIconDescription,
  meta,
  setDisplayMetaPanel,
  title,
}) => {
  const blockClass = `${pkg.prefix}--add-select__meta-panel`;
  const onCloseHandler = () => {
    setDisplayMetaPanel({});
  };

  return (
    <div className={blockClass}>
      <div className={`${blockClass}-header`}>
        <p className={`${blockClass}-title`}>{title}</p>
        <Button
          renderIcon={(props) => <Close size={16} {...props} />}
          iconDescription={closeIconDescription}
          tooltipPosition="left"
          tooltipAlignment="center"
          hasIconOnly
          onClick={onCloseHandler}
          kind="ghost"
          size="sm"
        />
      </div>
      {isValidElement(meta)
        ? meta
        : meta.map((entry) => (
            <div key={entry.id} className={`${blockClass}-entry`}>
              <p className={`${blockClass}-entry-title`}>{entry.title}</p>
              <p className={`${blockClass}-entry-body`}>{entry.value}</p>
            </div>
          ))}
    </div>
  );
};

AddSelectMetaPanel.propTypes = {
  closeIconDescription: PropTypes.string,
  meta: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    PropTypes.node,
  ]),
  setDisplayMetaPanel: PropTypes.func,
  title: PropTypes.string,
};

AddSelectMetaPanel.displayName = componentName;
