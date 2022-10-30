import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined'
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined'

import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">karahanadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <AccessibilityOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <CategoryOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingCartOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CampaignOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <TuneOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <FollowTheSignsOutlinedIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
