import stylse from './style.module.css'

export default function innerTitle(props){
  return(
    <h1 className={stylse.innerTitle}>{props.h1}</h1>
  )
}