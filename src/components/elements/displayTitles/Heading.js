import React from 'react'

export default function Heading(props) {

    const {
        children,
        variant,
        theme,  //style
        display,  //color
        alignement,
        className
    
    } = props

   const classDefault = "uppercase"

   let font, color, align

   switch(theme){
    case "secondary":
        font ="font-secondary"
        break
    default:
        font="tracking-tighter"
   }

   switch(display){
    case "gray":
        color ="text-gray-600"
        break
    default:
        color="text-secondary"
   }

   switch(alignement){
    case "center":
        align ="justify-center"
        break
    case "right":
        align ="justify-end"
        break
    default:
        align="justify-start"
   }
  

  switch (variant) {
    case "h3":
      return (
        <div className={`flex ${align}`}>
          <h3 className={`text-2xl ${className} ${classDefault} ${font} ${color}`}>{children}</h3>
        </div>
      );
    case "h4":
      return (
        <div className={`flex ${align}`}>
          <h4 className={`text-lg ${className} ${classDefault} ${font} ${color}`}>{children}</h4>
        </div>
      );
    default:
      return (
        <div className={`flex ${align}`}>
          <h2 className={`${theme === "secondary" ? "text-5xl" : "text-3xl"} ${className} ${classDefault} ${font} ${color}`}>{children}</h2>
        </div>
      );
  }
}
