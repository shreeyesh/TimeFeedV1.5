import {
    createActor as createtfActor,
    canisterId as tfCanisterId
  } from "../declarations/tf_backend/tf_backend.did.js"
 
  // bkyz2-fmaaa-aaaaa-qaaaq-cai
  export const makeActor = (canisterId, createActor) => {
    return createActor(canisterId, {
      agentOptions: {
        host: process.env.NEXT_PUBLIC_IC_HOST
      }
    })
  }
  
  export function maketfActor() {
    return makeActor(tfCanisterId, createtfActor)
  }
  