import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import {Route,Switch} from 'react-router-dom';
import './api/axiosDefault';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostsPage from './pages/posts/PostsPage';

function App() {

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route 
                exact path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the searc keyword." />
                )} 
              />
              <Route exact path="/signin" render={() => <SignInForm />}/>
              <Route exact path="/signup" render={() => <SignUpForm />}/>
              <Route exact path="/posts/create" render={() => <PostCreateForm />}/>
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;