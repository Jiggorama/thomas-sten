

import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Landing from './screens/Landing/Landing';
import Projects from './screens/Projects/Projects';
import Layout from './shared/Layout';

function App() {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Contact/>
    </Layout>
  );
}

export default App;
