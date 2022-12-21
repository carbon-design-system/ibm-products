import React, { useState } from "react";
import { Dropdown } from "@carbon/react";

import "./_example.scss";

import { DefaultEmptyStateWrapper } from "./EmptyStates/DefaultEmptyStateWrapper";
import { ErrorEmptyStateWrapper } from "./EmptyStates/ErrorEmptyStateWrapper";
import { NotificationsEmptyStateWrapper } from "./EmptyStates/NotificationsEmptyWrapper";
import { NoDataEmptyStateWrapper } from "./EmptyStates/NoDataEmptyStateWrapper";
import { NoTagsEmptyStateWrapper } from "./EmptyStates/NoTagsEmptyStateWrapper";
import { NotFoundEmptyStateWrapper } from "./EmptyStates/NotFoundEmptyStateWrapper";
import { UnauthorizedEmptyStateWrapper } from "./EmptyStates/UnauthorizedEmptyStateWrapper";

export const Example = () => {
  const emptyStateOptions = [
    "Default",
    "Error",
    "No data",
    "No tags",
    "Not found",
    "Notification",
    "Unauthorized"
  ];
  const [selectedEmptyState, setSelectedEmptyState] = useState();

  const renderSelectedEmptyState = () => {
    switch (selectedEmptyState) {
      case "Default":
        return <DefaultEmptyStateWrapper />;
      case "Error":
        return <ErrorEmptyStateWrapper />;
      case "No data":
        return <NoDataEmptyStateWrapper />;
      case "No tags":
        return <NoTagsEmptyStateWrapper />;
      case "Not found":
        return <NotFoundEmptyStateWrapper />;
      case "Notification":
        return <NotificationsEmptyStateWrapper />;
      case "Unauthorized":
        return <UnauthorizedEmptyStateWrapper />;
      default:
        return <ErrorEmptyStateWrapper />;
    }
  };

  return (
    <>
      <Dropdown
        ariaLabel='Empty state'
        id='empty-states'
        items={emptyStateOptions}
        onChange={(event) => setSelectedEmptyState(event.selectedItem)}
        selectedItem={selectedEmptyState || emptyStateOptions[1]}
        label='Choose empty state'
        titleText='Choose empty state'
      />
      <div className='empty-state-wrapper'>{renderSelectedEmptyState()}</div>
    </>
  );
};
