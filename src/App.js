import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TaskListComponent from './components/TaskListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent name="Alfredo" lastName="Parra" />
      </header>
      <main>
        <TaskListComponent/>
      </main>
    </div>
  );
}

export default App;