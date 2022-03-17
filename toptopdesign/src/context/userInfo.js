import React, { useState } from 'react';

const UserInfoContext = React.createContext([{}, () => {}]);

const UserInfoProvider = (props) => {
  const [userInfo, setUserInfo] = useState([]);
  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export {UserInfoContext, UserInfoProvider};