import React, { useContext } from "react";
import { Add } from "@carbon/icons-react";
import { NotificationsEmptyState } from "@carbon/ibm-products";
import { ThemeContext } from "../../ThemeSelector/ThemeContext";

export const NotificationsEmptyStateWrapper = () => {
  const theme = useContext(ThemeContext);
  const useDarkModeIllustration =
    theme.state.currentTheme.value === "carbon-theme--g90" ||
    theme.state.currentTheme.value === "carbon-theme--g100";

  return (
    <NotificationsEmptyState
      illustrationTheme={useDarkModeIllustration ? "dark" : "light"}
      size='sm'
      title="You don't have any notifications"
      subtitle='We were unable to retrieve any data.'
      action={{
        text: "Create new",
        onClick: () => console.log("Action click"),
        renderIcon: (props) => <Add {...props} size={20} />,
        iconDescription: "Add icon"
      }}
      link={{
        text: "View documentation",
        href: "https://www.carbondesignsystem.com"
      }}
    />
  );
};
