import "./qheader.css"
import React from 'react'

type QHeaderProps = {
    title: string
}

function QuestionHeader({ title }: QHeaderProps) {
    return (
        <div className="q-header-block">
            <h3 className="q-header-block_h3">{title}</h3>
        </div>
    )
}

export default QuestionHeader
