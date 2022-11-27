import React from 'react'
import { Card, Text, Metric, Flex, ProgressBar, Badge, BadgeDelta, Divider, Button } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";

const Task = ({ task }) => {
  return (
        <Card class="bg-black" maxWidth="max-w-lg">
            <Flex marginTop="mt-0">
                <Text>dfdfd{task.fields.Status}</Text>
                <Metric>$ 71,465</Metric>
                <BadgeDelta
                text="random"
                deltaType="decrease"
                isIncreasePositive={true}
                size="sm"
                tooltip=""
                marginTop="mt-0"
                />
            </Flex>
            <Divider />
            <Flex marginTop="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
            </Flex>
            <Button
                text="Refresh data"
                handleClick={() => console.log("clicked")}
            />
        </Card>
  )
}

export default Task





// const Task = ({ task }) => {
//   return (
//     <div>
//         <h2>{task.fields.Name}</h2>
//         <p>{task.fields.client_from_new_client}</p>
//         <p>{task.fields.Status}</p>
//         <br />
//     </div>
//   )
// }

// export default Task