//
// Copyright IBM Corp. 2021, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  Search,
  Tag,
} from 'carbon-components-react';

import { pkg } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';
const componentName = 'TagSetModal';
const blockClass = `${pkg.prefix}--tag-set-modal`;

export const TagSetModal = ({
  allTags,
  title,
  onClose,
  open,
  searchLabel,
  searchPlaceholder,
}) => {
  const [filteredModalTags, setFilteredModalTags] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let newFilteredModalTags = [];
    if (open) {
      if (search === '') {
        newFilteredModalTags = allTags.slice(0);
      } else {
        const lCaseSearch = search.toLocaleLowerCase();

        allTags.forEach((tag) => {
          const dataSearch = tag['data-search']
            ?.toLocaleLowerCase()
            ?.indexOf(lCaseSearch);
          const labelSearch = tag.label
            ?.toLocaleLowerCase()
            ?.indexOf(lCaseSearch);

          if (dataSearch > -1 || labelSearch > -1) {
            newFilteredModalTags.push(tag);
          }
        });
      }
    }
    setFilteredModalTags(newFilteredModalTags);
  }, [allTags, open, search]);

  const handleSearch = (ev) => {
    setSearch(ev.target.value || '');
  };

  return (
    <ComposedModal
      containerClassName={`${blockClass}__container`}
      className={`${blockClass}`}
      size="sm"
      {...{ open, onClose }}
    >
      <ModalHeader title={title} className={`${blockClass}__header`}>
        <Search
          data-modal-primary-focus
          className={`${blockClass}__search`}
          labelText={searchLabel}
          placeholder={searchPlaceholder}
          onChange={handleSearch}
          size="lg"
        />
      </ModalHeader>
      <ModalBody className={`${blockClass}__body`} hasForm>
        {filteredModalTags.map(({ label, ...other }, index) => (
          <Tag {...other} filter={false} key={`all-tags-${index}`}>
            {label}
          </Tag>
        ))}
      </ModalBody>
      <div className={`${blockClass}__fade`} />
    </ComposedModal>
  );
};

TagSetModal.propTypes = {
  allTags: PropTypes.arrayOf(
    PropTypes.shape({
      ...prepareProps(Tag.propTypes, 'filter'),
      label: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func,
  open: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  title: PropTypes.string,
};

TagSetModal.defaultProps = {
  // marked as required by TagSet if needed, default used to satisfy <Search /> component
  searchLabel: '',
};

TagSetModal.displayName = componentName;
