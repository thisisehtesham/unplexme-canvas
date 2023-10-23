import React, { useCallback, useEffect, useState } from "react";
import { Background, Controls, MiniMap, ReactFlow, useReactFlow } from "reactflow";
import TextBox from "./TextBox";
import NodeResizer from "./NodeResizer";

let id = 1;
const getId = () => `${id++}`;

const nodeTypes = {
    NodeResizer,
};

export default function Flow({
    reactFlowWrapper,
    nodes,
    setNodes,
    onNodesChange,
}) {
    const { project } = useReactFlow();
    const [selectedNode, setSelectedNode] = useState(null);

    const doubleClickHandler = useCallback(
        (event) => {
            const targetIsPane =
                event.target.classList.contains("react-flow__pane");

            if (targetIsPane) {
                const { top, left } =
                    reactFlowWrapper.current.getBoundingClientRect();
                const id = getId();
                const newNode = {
                    id,
                    type: "NodeResizer",
                    position: project({
                        x: event.clientX - left,
                        y: event.clientY - top + 35,
                    }),
                    data: {
                        label: <TextBox id={id} />,
                    },
                    style: {
                        background: "#ECDBC7",
                        fontSize: 12,
                        border: "1px solid black",
                        padding: 5,
                        borderRadius: 15,
                        height: 100,
                    },
                };

                setNodes((nds) => nds.concat(newNode));
            }
        },
        [project]
    );

    useEffect(() => {}, [nodes]);

    return (
        <ReactFlow
            nodes={nodes}
            zoomOnDoubleClick={false}
            onDoubleClick={doubleClickHandler}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onNodeDragStart={(event, node) => console.log({ node: node.id })}
            onNodeDragStop={(event, node) => {
                console.log({ node: node.id });
                setSelectedNode(null);
            }}
        >
            <Controls className="bg-white bottom-10"/>
            <MiniMap zoomable pannable />
            <Background
                variant="lines"
                gap={20}
                size={1}
                color="#282728"
                className="bg-black"
            />
        </ReactFlow>
    );
}
