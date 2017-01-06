import React from 'react'

const BreadcrumbLink = ({ name, current, onClick }) => {
   if (current) {
      return <span>{name}</span>
   } else {
      return <a href='#' onClick={onClick}>{name}</a>
   }
}

export default BreadcrumbLink
