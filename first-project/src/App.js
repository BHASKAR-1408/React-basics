import React from 'react';
import Greets from './components/Greets';
import Welcome from './components/Welcome';
import Helo from './components/Helo';
import Propsfunctions from './components/Prop';
import State from './components/State'
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';
import EventHandle from './components/EventHandle';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Usergreeting from './Usergreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InlineStyle from './components/InlineStyle';
import './cssStyles/appStyle.css'
import styles from './cssStyles/appStyles.module.css'
import Person from './components/Person'

function App() {
  return (
    <div className="App">

      {/* the below two lines are examples for styling*/}

      {/* <h1 className="error">error</h1>
      <h1 className={styles.sucess}>sucess</h1> */}

      {/* <Greets /> */}
      {/* <Welcome /> */}
      {/* <Helo /> */}
      {/* <Propsfunctions name="This is the props component" /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Destructuring name = "bhaskar"/> */}
      {/* <EventHandle /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <Usergreeting />  */}
      <NameList />
      {/* <Stylesheet className={true} /> */}
      {/* <InlineStyle /> */}
    </div>
  );
}

export default App;
