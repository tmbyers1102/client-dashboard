import React, { useEffect, useState } from 'react'
import Airtable from 'airtable';
import UpdateCard from './UpdateCard';
import {
    Col,
    ColGrid,
    Card,
    Text
} from "@tremor/react";
import SpinnerComponent from './animations/SpinnerComponent';

const base = new Airtable({ apiKey: 'keydxzcJdUXUCRGYy' }).base('appsc6BvDzAQRtjc2')

const Updates = () => {
    const [updates, setUpdates] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if(updates?.length > 0) {
         setLoading(false)
      }
    }, [updates])
    
    useEffect(() => {
        base("Client Updates")
          .select({ 
            view: "Grid view",
            filterByFormula: `AND({client}='Made Up Lamps',{client_visible})`,
            sort: [{field: 'created', direction: "desc"}]
          })
          .eachPage((records, fetchNextPage) => {
            console.log('Updates: '+records)
            setUpdates(records);
            fetchNextPage();
          });
    }, []);

    if (loading) {
        return (
            <div class="flex mt-6 pt-6 w-full mx-auto">
                <SpinnerComponent />  
            </div>
        )
    } else {
        return (
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto flex flex-wrap">
                    <>
                        {updates.map((update) => (
                            <UpdateCard key={update.id} update={update}/>
                        ))}
                    </>
                </div>
            </section>
        )
    }
}

export default Updates