import './App.css';
import { AuthProvider } from './context/auth';
import { CollectionsProvider } from './context/collections';
import { UserInfoProvider } from './context/userInfo';
import Routers from './router';

function App() {
  return (
      <CollectionsProvider>
        <UserInfoProvider>
          <AuthProvider>
            <Routers />
          </AuthProvider>
        </UserInfoProvider>
      </CollectionsProvider>
  );
}

export default App;
