//
// Copyright IBM Corp. 2021, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Search } from 'carbon-components-react';

import { pkg } from '../../settings';
const componentName = 'TagSetModal';
const blockClass = `${pkg.prefix}-tag-set`;

export const TagSetModal = ({
  allTags,
  heading,
  onClose,
  open,
  searchLabel,
  searchPlaceholder,
}) => {
  const [filteredModalTags, setFilteredModalTags] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const newFilteredModalTags = [];
    if (open) {
      allTags.forEach((tag) => {
        const dataSearch = (tag.props['data-search'] || '').toLocaleLowerCase();
        const contentsAsString = tag.props.children
          .toString()
          .toLocaleLowerCase();
        if (
          (dataSearch && dataSearch.indexOf(search) > -1) ||
          contentsAsString.indexOf(search) > -1
        ) {
          newFilteredModalTags.push(
            <span
              key={`filtered-tag-show-all`}
              className={`${blockClass}-show-all-tags`}>
              {React.cloneElement(tag)}
            </span>
          );
        }
      });
    }
    setFilteredModalTags(newFilteredModalTags);
  }, [allTags, open, search]);

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <Modal
      className={`${blockClass}--show-all-modal`}
      open={open}
      passiveModal
      size="sm"
      modalHeading={heading}
      onRequestClose={onClose}>
      <Search
        className={`${blockClass}--show-all-tags-search`}
        labelText={searchLabel}
        placeholder={searchPlaceholder}
        onChange={handleSearch}
        size="lg"
      />
      <div className={`${blockClass}--show-all-tags-content`}>
        {filteredModalTags}
      </div>
    </Modal>
  );
};

TagSetModal.propTypes = {
  allTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

TagSetModal.displayName = componentName;
