import { memo } from "react";
import { Handle, Position, NodeResizeControl } from "reactflow";

const controlStyle = {
    background: "transparent",
    border: "none",
};

const CustomNode = ({ data }) => {
    return (
        <>
            <NodeResizeControl
                style={controlStyle}
                minWidth={260}
                minHeight={90}
                id={data.label.props.id}
            >
                <ResizeIcon />
            </NodeResizeControl>

            <Handle type="target" position={Position.Left} />
            <div className={`custom-drag-handle-${data.label.props.id}`}>
                {data.label}
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    );
};

function ResizeIcon() {
    return (
        <svg height="100" width="100">
            <circle cx="5" cy="5" r="5" stroke="white" fill="#00A8FF" />
        </svg>
    );
}

export default memo(CustomNode);
