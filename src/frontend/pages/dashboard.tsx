import React, { useEffect } from "react";

import appStore from '../stores/appStore'

export default function Page() {
  const store = appStore()
  let timer: any = {}

  useEffect(() => {
    timer = setInterval(()=>{
      //
    }, 2000)
    
    return ()=>{
      clearInterval( timer )
    }
  }, [])

  return <div>
    <h1>App :: Dashboard page</h1>
    <b>version = {store.version} </b>
  </div>;
}