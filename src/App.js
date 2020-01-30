import React, { useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const App = () => {
  const [value, setvalue] = useState(0);
  const onChange = (e, newValue) => {
    setvalue(newValue);
  };
  return (
    <>
      <h1>Hello React</h1>
      <BottomNavigation value={value} onChange={onChange} showLabels>
        <BottomNavigationAction label="Restore" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
};

export default App;
