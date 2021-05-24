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
