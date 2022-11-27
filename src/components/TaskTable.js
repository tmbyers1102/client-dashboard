import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import { StatusOnlineIcon } from "@heroicons/react/outline";
import TaskTableRow from './TaskTableRow';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Divider,
} from "@tremor/react";
import SpinnerComponent from './animations/SpinnerComponent';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const TaskTable = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if(tasks?.length > 0) {
         setLoading(false)
      }
    }, [tasks])

    useEffect(() => {
        base("tasks")
          .select({ 
            view: "Fake Tasks",
            filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
            // filterByFormula: `{status}='Todo'`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setTasks(records);
            fetchNextPage();
          });
      }, []);

  if (loading) {
    return <SpinnerComponent />;
  } else {
    return (
      <>
        <Card>
            {/* <Title>Pending Tasks</Title> */}
            <Table marginTop="mt-3">
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Task</TableHeaderCell>
                    <TableHeaderCell>Related Project</TableHeaderCell>
                    <TableHeaderCell>Due Date</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map((task) => (
                  <TaskTableRow
                      key={task.id}
                      task={task}
                  />
                ))}
                
            </TableBody>
            </Table>
        </Card>
      </>
    )
  }
}

export default TaskTable
