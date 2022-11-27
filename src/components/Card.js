import { Card, Text, Metric, Flex, ProgressBar, Badge, BadgeDelta, Divider } from "@tremor/react";

// const Card = ({ task }) => {
//     return (
//         <Card maxWidth="max-w-lg">
//             <Flex marginTop="mt-0">
//                 <Text>Sales</Text>
//                 <Metric>$ 71,465</Metric>
//                 <BadgeDelta
//                 text="random"
//                 deltaType="decrease"
//                 isIncreasePositive={true}
//                 size="sm"
//                 tooltip=""
//                 marginTop="mt-0"
//                 />
//             </Flex>
//             <Divider />
//             <Flex marginTop="mt-4">
//             <Text>32% of annual target</Text>
//             <Text>$ 225,000</Text>
//             </Flex>
//             <ProgressBar percentageValue={32} marginTop="mt-2" />
//         </Card>
//     )
// }

// export default Card;




export default ({ task }) => (
  <Card maxWidth="max-w-lg">
    <Flex marginTop="mt-0">
        <Text>Sales</Text>
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
    <ProgressBar percentageValue={32} marginTop="mt-2" />
  </Card>
);

