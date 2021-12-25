import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";



function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
          <SidebarRow src = "images/image1.jpg" title = "Slavi Slavov" />
          <SidebarRow Icon = { EmojiFlagsIcon } title = "Pages" />
          <SidebarRow Icon = { PeopleIcon } title = "Friends" />
          <SidebarRow Icon = { ChatIcon } title = "Messenger" />
          <SidebarRow Icon = { StorefrontIcon} title = "Marketplace" />
          <SidebarRow Icon = { VideoLibraryIcon } title = "Videos" />
          <SidebarRow Icon = { ExpandMoreIcon } title = "Marketplace" />
        </div>
    )
}

export default Sidebar;
