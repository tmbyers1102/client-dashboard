import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';
import '@tremor/react/dist/esm/tremor.css';
import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';
import Projects from './components/Projects';
import Task from './components/Task';
import Updates from './components/Updates';
import TaskTable from './components/TaskTable';
import CompletedTaskTable from './components/CompleteTaskTable'
//import Card from './components/Card';
// can prob delete this
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.style';
import {
  Block,
  Card,
  ColGrid,
  Tab,
  TabList,
  Text,
  Title,
} from '@tremor/react';
import Videos from './components/Videos';
import Promotions from './components/Promotions';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

function App() {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <>
      {/* <GlobalStyle /> */}
      <main className="bg-slate-50 p-6 sm:p-10">
            <Title>Made Up Lamps</Title>
            {/* <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </Text> */}

            <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                <Tab value={ 1 } text="Updates" />
                <Tab value={ 2 } text="Tasks" />
                <Tab value={ 3 } text="Projects" />
                <Tab value={ 4 } text="Questions" />
                <Tab value={ 5 } text="Videos" />
                <Tab value={ 6 } text="Promotions" />
            </TabList>

            { selectedView === 1 ? (
                <Block marginTop="mt-6">
                        <Updates/>
                </Block>
            ) : selectedView === 2 ? (
                <Block marginTop="mt-6">
                      <TaskTable />
                </Block>
            ) : selectedView === 3 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Projects/>
                    </Card>
                </Block>
            ) : selectedView === 4 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Questions />
                    </Card>
                </Block>
            ) : selectedView === 5 ? (
                <Block marginTop="mt-6">
                    <Card>
                        <Videos />
                    </Card>
                </Block>
            ) : (
                <Block marginTop="mt-6">
                        <Promotions />
                </Block>
            ) }
      </main>
    </>
  );
}

export default App;





// saving old code
// const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

// function App() {
//   const [tasks, setTasks] = useState([])
//   const [clients, setClients] = useState([])

//   useEffect(() => {
//     base("tasks")
//       .select({ view: "Tasks" })
//       .eachPage((records, fetchNextPage) => {
//         console.log(records)
//         setTasks(records);
//         fetchNextPage();
//       });
//     base("Clients At-A-Glance")
//       .select({ view: "Toms Clients" })
//       .eachPage((records, fetchNextPage) => {
//         setClients(records);
//         fetchNextPage();
//       });
//   }, []);

//   return (
//     <>
//       <h1>My Tasks</h1>
//       <Card/>
//       <h1>My Tasks</h1>
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           task={task}
//         />
//       ))}
//     </>
//   );
// }

// export default App;
