import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import BalanceIcon from '@mui/icons-material/Balance'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Widget = ({ type }) => {
  let data

  // temporary data
  const amount = 100
  const diff = 20
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: '#0077b6', backgroundColor: '#caf0f8' }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <AddShoppingCartIcon
            className="icon"
            style={{ color: '#f08080', backgroundColor: '#ffdab9' }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <PointOfSaleIcon
            className="icon"
            style={{ color: '#1b4332', backgroundColor: '#d8f3dc' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <BalanceIcon
            className="icon"
            style={{ color: '#a4133c', backgroundColor: '#fff0f3' }}
          />
        ),
      }
      break
    default:
      break
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
