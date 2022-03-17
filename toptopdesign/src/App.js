import './App.css';
import { CollectionsProvider } from './context/collections';
import { UserInfoProvider } from './context/userInfo';
import Routers from './router';

function App() {
  return (
      <CollectionsProvider>
        <UserInfoProvider>
          <Routers />
        </UserInfoProvider>
      </CollectionsProvider>
  );
}

export default App;
