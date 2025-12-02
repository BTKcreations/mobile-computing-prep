import React from 'react'

const MindMapNode = ({ node }) => (
    <div className="mm-node">
        <div className="mm-content">{node.label}</div>
        {node.children && node.children.length > 0 && (
            <div className="mm-children">
                {node.children.map((child) => (
                    <MindMapNode key={child.id} node={child} />
                ))}
            </div>
        )}
    </div>
)

export default MindMapNode
