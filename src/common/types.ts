export type Answer = {
    value: string,
    label: string
}

export type QuestionProps = {
    answers: Answer[],
    title: string
}