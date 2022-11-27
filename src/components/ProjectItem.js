import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import {
    Badge,
    Bold,
    Flex,
    Card,
    Text,
    Title,
    Divider,
    List,
    ListItem,
    Subtitle,
} from "@tremor/react";
import ProjectItemTask from './ProjectItemTask';
import SpinnerComponent from './animations/SpinnerComponent';
import PulseRowComponent from './animations/PulseRowComponent';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const ProjectItem = ({ projectItem }) => {
    const [projectItemTasks, setProjectItemTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if(projectItemTasks?.length > 0) {
         setLoading(false)
      }
    }, [projectItemTasks])

    useEffect(() => {
        base("Tasks")
          .select({ 
            view: "Fake Tasks",
            filterByFormula: `AND({new_client}='Made Up Lamps')`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log('projectItemTasks: '+records)
            setProjectItemTasks(records);
            fetchNextPage();
          });
    }, []);

    var status_color = []
    {if (projectItem.fields.Status == 'Complete') {
        status_color = 'emerald'
    } else if (projectItem.fields.Status == 'In progress') {
        status_color = 'sky'
    } else if (projectItem.fields.Status == 'Not Started') {
        status_color = 'slate'
    } else {
        status_color = 'rose'
    }};

    if (loading) {
        return (
            <div class="self-start">
                <Card maxWidth="max-w-md">
                    <Bold>{projectItem.fields.raw_name}</Bold>
                    <List marginTop="mt-2">

                        <ListItem spaceX="space-x-0">
                            <Subtitle>Status</Subtitle>
                            <Badge text={projectItem.fields.Status} color={status_color}/>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Start Date</Subtitle>
                            <Text>{projectItem.fields.start_date}</Text>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Completion Date</Subtitle>
                            <Text>{projectItem.fields.completion_date}</Text>
                        </ListItem>
                    </List>
                    <PulseRowComponent />
                </Card>
            </div>
        )
    } else {
        return (
            <div class="self-start">
                <Card maxWidth="max-w-md">
                    <Bold>{projectItem.fields.raw_name}</Bold>
                    <List marginTop="mt-2">

                        <ListItem spaceX="space-x-0">
                            <Subtitle>Status</Subtitle>
                            <Badge text={projectItem.fields.Status} color={status_color}/>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Start Date</Subtitle>
                            <Text>{projectItem.fields.start_date}</Text>
                        </ListItem>
                        <ListItem spaceX="space-x-0">
                            <Subtitle>Completion Date</Subtitle>
                            <Text>{projectItem.fields.completion_date}</Text>
                        </ListItem>
                    </List>
                    {projectItemTasks.map((projectItemTask, index) => {
                        return projectItem.id === projectItemTask.fields.associated_project_item_record_id_string ? (
                        <>
                                <ProjectItemTask key={projectItemTask.id} projectItemTask={projectItemTask} />
                        </>
                        ) : (
                            null
                        )
                    })}
                </Card>
            </div>
        )
            }
}


// const ProjectItem = ({ thisProjectsItem }) => {
//     const [projectItemTasks, setProjectItemTasks] = useState([])
//     useEffect(() => {
//         base("Tasks")
//           .select({ 
//             view: "All Tasks",
//             filterByFormula: `AND({new_client}='T3 Micro', {related_project_item}='Product Designation Projec')`,
//           })
//           .eachPage((records, fetchNextPage) => {
//             console.log('projectItemTasks: '+records)
//             setProjectItemTasks(records);
//             fetchNextPage();
//           });
//     }, []);

//         return (
//             <Card maxWidth="max-w-sm">
//                 <Bold>{thisProjectsItem.fields.raw_name}</Bold>
//                 <List marginTop="mt-2">
//                     <ListItem spaceX="space-x-0">
//                         <Subtitle>Status</Subtitle>
//                         <Badge text={thisProjectsItem.fields.name_from_project}/>
//                     </ListItem>
//                     <ListItem spaceX="space-x-0">
//                         <Subtitle>Start Date</Subtitle>
//                         <Text>{thisProjectsItem.fields.start_date}</Text>
//                     </ListItem>
//                     <ListItem spaceX="space-x-0">
//                         <Subtitle>Completion Date</Subtitle>
//                         <Text>{thisProjectsItem.fields.completion_date}</Text>
//                     </ListItem>
//                 </List>
//                 {/* {projectItemTasks.map((projectItemTask) => (
//                     <>
//                             <ProjectItemTask key={projectItemTask.id} projectItemTask={projectItemTask} />
//                             <h3>task's proj item id: {projectItemTask.fields.related_project_item}</h3>
//                             <h3>item_id: {projectItem.fields.project_item_record_id}</h3>
//                     </>
//                 ))} */}
//             </Card>
//         )
// }
export default ProjectItem