import '../features/list/list.scss'

export const ListButton = (props: {onClickAction: any, text: string}) => {
    return (
    <button className='button'
    onClick={props.onClickAction}>
    {props.text}
    </button>)}