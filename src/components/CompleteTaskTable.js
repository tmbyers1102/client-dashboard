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
} from "@tremor/react";

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const TaskTable = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        base("tasks")
          .select({ 
            view: "All Tasks",
            filterByFormula: `{status}='Todo'`,
            filterByFormula: `AND({client_from_new_client}='T3 Micro',{status}='Done',DATESTR({date_completed})='2022-09-07'))`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setTasks(records);
            fetchNextPage();
          });
      }, []);

  return (
    <Card>
        <Title>Completed Tasks</Title>
        <Table marginTop="mt-5">
        <TableHead>
            {/* <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow> */}
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
  )
}

export default TaskTable
