import React from "react";
const useTabs = () => {
  const tabsArray = React.useMemo(
    () => [
      {
        label: "English",
      },
      {
        label: "Hindi",
      },
    ],
    []
  );

  const [selectedTab, setSelectedTab] = React.useState(tabsArray[0].label);

  const onSelectTab = React.useCallback((value: string) => {
    setSelectedTab(value);
  }, []);
  // Return Values
  return {
    selectedTab,
    tabsArray: React.useMemo(() => tabsArray, [tabsArray]),
    onSelectTab: React.useMemo(() => onSelectTab, [onSelectTab]),
  };
};
export default useTabs;
