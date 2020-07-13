import React from 'react';
import cs from 'classnames'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Prop={
  name?:string
}&React.SVGAttributes<any>
const Icon=(props:Prop)=>{
  const {name,children,className,...rest}=props
     return(
    <svg className={cs('icon',className)} {...rest}>
      {props.name&&<use xlinkHref={'#'+props.name}/>}
    </svg>
  )
}
export default Icon