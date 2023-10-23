'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import Flow from './components/Flow'
import Navbar from './components/NavBar';
import { ReactFlowProvider, useNodesState } from 'reactflow'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app, db } from './config/firebase'


export default function Home() {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])

  const db = getFirestore(app);

  const handleSaveNodes = async () => {
    try {
      if (nodes?.length) {
        const docRef = await addDoc(collection(db, 'nodes'), {
          nodes: JSON.stringify(nodes),
        })
      }
    } catch (error) {
      console.error('Error while saving document: ', error)
    }
  };
  

  return (
    <main className="w-full h-screen relative" ref={reactFlowWrapper}>
      <ReactFlowProvider>
        <Navbar/>
        <Flow
          reactFlowWrapper={reactFlowWrapper}
          nodes={nodes}
          setNodes={setNodes}
          onNodesChange={onNodesChange}
        />
      </ReactFlowProvider>

      <div className="absolute cursor-pointer rounded bg-[#334155] hover:bg-[#1e293b] top-[6rem] right-[1rem] z-[1500] p-2"
        onClick={handleSaveNodes}
      >
        <Image src="/SaveIcon.png" alt="SaveIcon" width={50} height={50}
      />
      </div>
    </main>
  )
}
