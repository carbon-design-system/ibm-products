import { useEffect, useState } from 'react';
import { extractShapesArray } from '../../global/js/utils/props-helper';

export const useActionBar = (actionBarItems) => {
  const [hasActionBar, setHasActionBar] = useState(false);
  const [actionBarItemArray, setActionBarItemArray] = useState([]);

  useEffect(() => {
    const newShapes = extractShapesArray(actionBarItems);
    setHasActionBar(newShapes.length);
    setActionBarItemArray(newShapes);
  }, [actionBarItems]);

  return { hasActionBar, actionBarItemArray };
};

export const useHasBreadcrumbRow = (actionBarItems, breadcrumbItems) => {
  const [hasBreadcrumbRow, setHasBreadcrumbRow] = useState(false);

  useEffect(() => {
    // Breadcrumb row only rendered if true
    // eslint-disable-next-line
    setHasBreadcrumbRow(
      !(breadcrumbItems === undefined && actionBarItems === undefined)
    );
  }, [actionBarItems, breadcrumbItems]);

  return hasBreadcrumbRow;
};

export const usePageActionsInBreadcrumbRow = (
  hasActionBar,
  titleRowSpaceAbove,
  preCollapseTitleRow,
  scrollYValue
) => {
  const [pageActionsInBreadcrumbRow, setPageActionsInBreadcrumbRow] = useState(
    false
  );

  useEffect(() => {
    // Determine the location of the pageAction buttons
    setPageActionsInBreadcrumbRow(
      preCollapseTitleRow || (scrollYValue > titleRowSpaceAbove && hasActionBar)
    );
  }, [hasActionBar, titleRowSpaceAbove, preCollapseTitleRow, scrollYValue]);

  return pageActionsInBreadcrumbRow;
};

export const usePageActionsItemArray = (pageActions) => {
  const [pageActionsItemArray, setPageActionsItemArray] = useState([]);

  useEffect(() => {
    const shapes = extractShapesArray(pageActions);
    setPageActionsItemArray(
      shapes?.map((shape) => ({ label: shape.children, ...shape }))
    );
  }, [pageActions]);

  return pageActionsItemArray;
};

export const useSpacingBelowTitle = (
  availableSpace,
  tags,
  navigation,
  subtitle,
  pageActions
) => {
  const [spacingBelowTitle, setSpacingBelowTitle] = useState('06');

  useEffect(() => {
    // Determines the amount of space needed below the title
    let belowTitleSpace = 'default';

    if (
      pageActions !== undefined &&
      navigation !== undefined &&
      subtitle === undefined &&
      availableSpace === undefined
    ) {
      belowTitleSpace = '06';
    } else if (subtitle !== undefined || availableSpace !== undefined) {
      belowTitleSpace = '03';
    } else if (navigation === undefined && tags !== undefined) {
      belowTitleSpace = '05';
    }
    setSpacingBelowTitle(belowTitleSpace);
  }, [availableSpace, tags, navigation, subtitle, pageActions]);

  return spacingBelowTitle;
};

export const useTitleShape = (title, titleIcon, defaultTitle) => {
  /**
   * * Title shape is used to allow title to be string or shape
   */
  const [titleShape, setTitleShape] = useState({});

  useEffect(() => {
    let newShape = { ...defaultTitle };

    if (title?.text) {
      // title is in shape format
      newShape = Object.assign(newShape, { ...title });
    } else {
      // title is a string
      newShape.text = title;
    }

    if (!newShape.icon && titleIcon) {
      // if no icon use titleIcon if supplied
      newShape.icon = titleIcon;
    }

    setTitleShape(newShape);
  }, [defaultTitle, title, titleIcon, titleShape]);

  return titleShape;
};
